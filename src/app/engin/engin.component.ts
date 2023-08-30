import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {EnginService} from "../services/engin.service";
import {Engin} from "../model/engin.model";

@Component({
  selector: 'app-engin',
  templateUrl: './engin.component.html',
  styleUrls: ['./engin.component.css']
})
export class EnginComponent implements OnInit{
  Engins! : Observable<Array<Engin>>;
  errorMessage!: string;
  searchFormGroup : FormGroup | undefined;
  constructor(private EnginService : EnginService, private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchEngins();
  }
  handleSearchEngins() {
    let kw=this.searchFormGroup?.value.keyword;
    this.Engins=this.EnginService.searchEngins(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }


  handleDeleteEngin(e: Engin) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.EnginService.deleteEngin(e.matricule_engin).subscribe({
      next : (resp) => {
        this.Engins=this.Engins.pipe(
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
