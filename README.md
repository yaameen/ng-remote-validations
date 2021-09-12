# Ng Remote Validations

A simple utility to ease presentation of server side validation errors 


- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)



## Installation

```bash
npm i ng-remote-validations
```

## Setup

Simply import **NgRemoteValidationsModule** from the library to your **app.module.ts** and specify the global configurations as shown in the example below.


```typescript

import { NgRemoteValidationsModule } from 'ng-remote-validations';


@NgModule({
  imports: [
    // ....
    NgRemoteValidationsModule,
  ],
  providers: []
})
export class AppModule {
}
```

## Usage

Use with angular reactive forms

```html
<form [formGroup]='form'>
    <mat-form-field>
      <mat-label>Name</mat-label>
      <ng-file-input required formControlName='name'></ng-file-input>
      <mat-error validate='name'></mat-error>
    </mat-form-field>
  </form>
```

Import the remote validation service to wherever you might want to obtain the errors. 
The interceptor is a sound option for the purpose and follows an example on how you may use this with an interceptor.

```ts
@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    //   ...
    private remoteValidationService: NgRemoteValidationsService,
  ) {}

    //   ....
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

			// ...
			return next.handle(request) 
    .pipe(
      tap(
							(resp: any) => {},
							(err: any) => {
								// Populate the errors
								if( err.status == 422  || err.status == 406 ) {
											if(err.error.errors) {
													this.serverValidations.refresh(err.error.errors);
											}
								}
							},
						)
				);
		}
}
```

## License 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  