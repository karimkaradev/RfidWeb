import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthQuery } from './auth/+state';

@Directive({
  selector: '[showIfRole]'
})
export class showIfRoleDirective {
  subscription: Subscription;
  roles:string[];
  @Input("showIfRole") role: string;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private auth: AuthQuery
  ) {
  }

  ngOnInit() {
    this.subscription = this.auth.roles$.subscribe(roles=>{
       if(roles) {
        if (roles.includes(this.role)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      
        } else {
          this.viewContainer.clear();
    
        }
       }
      else{
        this.viewContainer.clear();
        console.log('false');
      }
      });
      }  
      ngOnDestroy() {
        this.subscription.unsubscribe();
      }
}

