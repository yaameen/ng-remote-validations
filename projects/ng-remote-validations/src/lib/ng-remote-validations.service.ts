import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgRemoteValidationsService {

  private errors: BehaviorSubject<any>
  constructor() {
    this.errors = new BehaviorSubject([]);
  }

  refresh(errors: any) {
    this.errors.next(errors)  
  }

  onChange(fn: (_: any) => void ) {
    this.errors.subscribe(fn)
  }
}
