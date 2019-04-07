import { Directive, TemplateRef, Input, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AuthQuery } from '../auth/+state';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Directive({
  selector: '[Responsive]'
})
export class ResponsiveDirective implements OnInit,OnDestroy {
  subscription: Subscription;
  @Input('Responsive') size: string;
  
  media$: Observable<MediaChange[]>;
  
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private authQuery: AuthQuery,
              media: MediaObserver
  ) { this.media$ = media.asObservable();
  }
  
  ngOnInit() {
    
    this.subscription = this.media$.subscribe(medias => {
      //this.viewContainer.clear();
      console.log (medias);
      this.viewContainer.clear();
      medias.forEach(media => {
        if (media.mqAlias ===this.size) {
        console.log ('media');
        this.viewContainer.createEmbeddedView(this.templateRef);
      }});
    });
  }  
      //   if (this.showIfLoggedIn) {
      //    
      //   } else {
      //     this.viewContainer.clear();
      //   }
      // } else {
      //   if (this.showIfLoggedIn) {
      //     this.viewContainer.clear();
      //   } else {
      //     this.viewContainer.createEmbeddedView(this.templateRef);
      //   }
  
  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


