import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor (
    private auth: AuthService,
    private router: Router
  ) {}
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
      // throw new Error("Method not implemented");
      if (this.auth.isAuth() ) {
        // console.log(`REQUEST:`, req);
        // let token:string
        if (typeof this.auth.token === `string`) {
          // console.log(`TOKEN: `, this.auth.token);
          let token = this.auth.token
          req = req.clone({
            setParams: {
              auth: token
            }
          })
        }
      }
      return next.handle(req)
      .pipe(
        catchError(error => {
          if (error.status === 401 ) {
            this.auth.logout()
            this.router.navigate(['/admin', 'login'])
          }
          return throwError(error)
        })
      )
  }

}
