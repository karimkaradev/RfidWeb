import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../_services/jwt.service';

@Directive({
  selector: '[appIfRole]'
})
export class IfRoleDirective {
  subscription: Subscription;
  @Input() role: string;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private auth: AuthenticationService
  ) {
  }

  ngOnInit() {
    
        if (this.auth.hasRole(this.role)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      
      }  
}

