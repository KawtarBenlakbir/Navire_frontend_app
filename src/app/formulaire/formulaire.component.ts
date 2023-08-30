import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {AffectationService} from "../services/affectation.service";
import {Affectation} from "../model/affectation.model";
import {catchError, map, Observable, throwError} from "rxjs";
import {Engin} from "../model/engin.model";
import {Equipe} from "../model/equipe.model";
import {Navire} from "../model/navire.model";
import {Grue} from "../model/grue.model";
import {EnginService} from "../services/engin.service";
import {EquipeService} from "../services/equipe.service";
import {GrueService} from "../services/grue.service";
import {NavireService} from "../services/navire.service";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
})
export class FormulaireComponent implements OnInit{
  formulaire! : FormGroup;
  NavireId! : string ;
  Engin! : Observable<Array<Engin>>;
  Equipe! : Observable<Array<Equipe>>;
  Grue! : Observable<Array<Grue>>;
  errorMessage!: string;
  searchFormGroup : FormGroup | undefined;

  constructor(private navireService:NavireService,private grueService : GrueService,private equipeService : EquipeService,private EnginService : EnginService,private route : ActivatedRoute,private formBuilder: FormBuilder, private affectationService:AffectationService, private router:Router)
  { }
  ngOnInit(): void {
    this.NavireId = this.route.snapshot.params['id'];
    this.formulaire = this.formBuilder.group({
      navire_id : this.NavireId,
      engin_id: this.formBuilder.control(null, [Validators.required, Validators.minLength(4)]),
      equipe_id : this.formBuilder.control(null, [Validators.required, Validators.minLength(4)]),
      grue_id : this.formBuilder.control(null,[Validators.required, Validators.minLength(4)]),
    });this.handleSearchEngins();
    this.handleSearchEquipes();this.handleSearchGrues();
  }
  handleSearchEngins() {
    let kw=this.searchFormGroup?.value.keyword;
    this.Engin=this.EnginService.searchEngins(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
  handleSearchEquipes() {
    let kw=this.searchFormGroup?.value.keyword;
    this.Equipe=this.equipeService.searchEquipes(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
  handleSearchGrues() {
    let kw=this.searchFormGroup?.value.keyword;
    this.Grue=this.grueService.searchGrue(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
  handleSaveAffectation() {
    let Affectation:Affectation=this.formulaire.value;
    this.affectationService.saveAffectation(Affectation).subscribe({
      next : data=>{
        alert("affectation  has been successfully saved!");
        this.router.navigateByUrl("/admin/Affectation");
      },
      error : err => {
        console.log(err);
      }
    });

  }

  handleDeleteEquipe(e: Equipe) {
    this.equipeService.deleteEquipe(e.matricule_Equipe).subscribe({
      next : (resp) => {
        this.Equipe=this.Equipe.pipe(
          map(data=>{
            let index=data.indexOf(e);
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }

  handleDeleteEngin(e: Engin) {
    this.EnginService.deleteEngin(e.matricule_engin).subscribe({
      next : (resp) => {
        this.Engin=this.Engin.pipe(
          map(data=>{
            let index=data.indexOf(e);
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }
  handleDeleteGrue(e: Grue) {
    this.grueService.deleteGrue(e.matricule_grue).subscribe({
      next : (resp) => {
        this.Grue=this.Grue.pipe(
          map(data=>{
            let index=data.indexOf(e);
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }
}


