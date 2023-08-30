import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {Engin} from "../model/engin.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Equipe} from "../model/equipe.model";
import {EquipeService} from "../services/equipe.service";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit{
  Equipes! : Observable<Array<Equipe>>;
  errorMessage!: string;
  searchFormGroup : FormGroup | undefined;
  constructor(private EquipeService : EquipeService, private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchEquipes();
  }
  handleSearchEquipes() {
    let kw=this.searchFormGroup?.value.keyword;
    this.Equipes=this.EquipeService.searchEquipes(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }


  handleDeleteEquipe(e: Equipe) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.EquipeService.deleteEquipe(e.matricule_Equipe).subscribe({
      next : (resp) => {
        this.Equipes=this.Equipes.pipe(
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
