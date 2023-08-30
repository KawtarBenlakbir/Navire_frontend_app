import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavireComponent } from './navire/navire.component';
import { NewNavireComponent } from './new-navire/new-navire.component';
import { AffectationComponent } from './affectation/affectation.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EnginComponent } from './engin/engin.component';
import { NewEnginComponent } from './new-engin/new-engin.component';
import { EquipeComponent } from './equipe/equipe.component';
import { NewEquipeComponent } from './new-equipe/new-equipe.component';
import { GrueComponent } from './grue/grue.component';
import { NewGrueComponent } from './new-grue/new-grue.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavireComponent,
    NewNavireComponent,
    AffectationComponent,
    LoginComponent,
    EnginComponent,
    NewEnginComponent,
    EquipeComponent,
    NewEquipeComponent,
    GrueComponent,
    NewGrueComponent,
    FormulaireComponent,
    AdminTemplateComponent,
    NotAuthorizedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS ,useClass : AppHttpInterceptor , multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
