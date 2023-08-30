import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavireComponent} from "./navire/navire.component";
import {AffectationComponent} from "./affectation/affectation.component";
import {NewNavireComponent} from "./new-navire/new-navire.component";
import {LoginComponent} from "./login/login.component";
import {EnginComponent} from "./engin/engin.component";
import {NewEnginComponent} from "./new-engin/new-engin.component";
import {EquipeComponent} from "./equipe/equipe.component";
import {NewEquipeComponent} from "./new-equipe/new-equipe.component";
import {GrueComponent} from "./grue/grue.component";
import {NewGrueComponent} from "./new-grue/new-grue.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [
  { path: "login",component:LoginComponent},
  {path:"admin",component: AdminTemplateComponent ,canActivate : [AuthenticationGuard], children :[
      { path: "Navire",component: NavireComponent ,canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "Affectation",component:AffectationComponent},
      { path: "New-Navire",component:NewNavireComponent,canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "Engin",component:EnginComponent,canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "New-Engin",component:NewEnginComponent,canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "Equipe",component:EquipeComponent,canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "New-Equipe",component:NewEquipeComponent,canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "Grue",component:GrueComponent,canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "New-Grue",component:NewGrueComponent , canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "formulaire/:id",component:FormulaireComponent,canActivate :[AuthorizationGuard] , data : {role:"ADMIN"}},
      { path: "notAuthorized",component:NotAuthorizedComponent}
    ]},
  { path: "",redirectTo : "/login",pathMatch : "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
