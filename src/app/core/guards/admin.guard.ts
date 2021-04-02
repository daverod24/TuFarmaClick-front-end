import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
    private router: Router ){}
    
  
    canActivate(): Observable<boolean> | boolean  {
      return this.authService.actualizarToken()
              .pipe(
                tap( valid => {
                  console.log(valid)
                  if ( !valid ) {
                    this.router.navigateByUrl('/admin');
                  }
                  return this.router.navigateByUrl('/home');
                })
              );
    }
  
    canLoad(): Observable<boolean> | boolean {
      return this.authService.actualizarToken()
        .pipe(
          tap( valid => {
            if ( !valid ) {
              this.router.navigateByUrl('/admin');
            }
            return this.router.navigateByUrl('/home');
          })
        );
    }
 
  }
