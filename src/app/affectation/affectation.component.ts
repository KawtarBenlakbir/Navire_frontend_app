import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, map, Observable, throwError} from "rxjs";

import {NavireService} from "../services/navire.service";
import {Navire} from "../model/navire.model";
import {AffectationService} from "../services/affectation.service";
import {Affectation} from "../model/affectation.model";

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit{
  Navires! : Observable<Array<Navire>>;
  AffectationFormGroup! : FormGroup;
  Affectation! : Observable<Array<Affectation>>
  errorMessage! :string ;
  searchFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private affectationService : AffectationService) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchAffectationNavire()
  }



  handleSearchAffectationNavire() {
    let kw=this.searchFormGroup?.value.keyword;
    this.Affectation=this.affectationService.searchAffectationparNavires(kw).pipe(
      catchError(err => {
      this.errorMessage=err.message;
      return throwError(err);
    })
    );
  }

  handleDeleteAffectation(a: Affectation) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.affectationService.deleteAffectation(a.id_Affectation).subscribe({
      next : (resp) => {
        this.Affectation=this.Affectation.pipe(
          map(data=>{
            let index=data.indexOf(a);
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

