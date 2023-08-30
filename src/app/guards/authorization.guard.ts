import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "../services/AuthService";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard {
  constructor(private authService:AuthService , private router : Router ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.roles.includes("ADMIN")){
    return true;}else {
      this.router.navigateByUrl("/admin/notAuthorized")
      return false;
    }

  }


}
