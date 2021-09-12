import { NgModule } from '@angular/core';
import { ValidationDirective } from './validation.directive';
// import { ValidationService } from './validation.service';



@NgModule({
  declarations: [
    ValidationDirective,
    // ValidationService,
  ],
  imports: [
  ],
  exports: [
    ValidationDirective,
  ]
})
export class NgRemoteValidationsModule { }
