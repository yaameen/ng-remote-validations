import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { NgRemoteValidationsService } from './ng-remote-validations.service';

@Directive({
  selector: '[validate]'
})
export class ValidationDirective implements OnInit {

  @Input('validate') validation!: string

  constructor(
    private ele: ElementRef,
    private fg: FormGroupDirective,
    private v: NgRemoteValidationsService,

  ) {
  }

  ngOnInit(): void {
    if(!this.validation) return;
    this.v.onChange((errors: any) => {
      if( errors[this.validation] ) {
        this.fg.form.get(this.validation)?.setErrors({
          remote: errors[this.validation]
        })
        this.ele.nativeElement.innerHTML = errors[this.validation]
      }
    }) 
  }

}

