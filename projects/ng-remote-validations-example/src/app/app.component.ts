import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgRemoteValidationsService } from 'projects/ng-remote-validations/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-remote-validations-example';
  form: FormGroup

  errors = []

  constructor(
    private fb: FormBuilder,
    private svc: NgRemoteValidationsService,
  ){
    this.form = this.fb.group({
      name: new FormControl,
    })


    this.svc.onChange((i: any) => this.errors = i )

  }
  
  
  save() {
    
    setTimeout(() => {
      this.svc.refresh({name: 'Very bad name'})
    }, 5000)
    console.log('Saved..');
    
  }
}
