import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {Equipe} from "../model/equipe.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Grue} from "../model/grue.model";
import {GrueService} from "../services/grue.service";

@Component({
  selector: 'app-grue',
  templateUrl: './grue.component.html',
  styleUrls: ['./grue.component.css']
})
export class GrueComponent implements OnInit{
  Grues! : Observable<Array<Grue>>;
  errorMessage!: string;
  searchFormGroup : FormGroup | undefined;
  constructor(private GrueService : GrueService, private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchGrues();
  }
  handleSearchGrues() {
    let kw=this.searchFormGroup?.value.keyword;
    this.Grues=this.GrueService.searchGrue(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }


  handleDeleteGrue(e: Grue) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.GrueService.deleteGrue(e.matricule_grue).subscribe({
      next : (resp) => {
        this.Grues=this.Grues.pipe(
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
