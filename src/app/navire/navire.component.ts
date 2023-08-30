import {Component, OnInit, ViewChild} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {Navire} from "../model/navire.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NavireService} from "../services/navire.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-navire',
  templateUrl: './navire.component.html',
  styleUrls: ['./navire.component.css']
})
export class NavireComponent implements OnInit{
  Navires! : Observable<Array<Navire>>;
  errorMessage!: string;
  @ViewChild('paginator') paginator! : MatPaginator;
  searchFormGroup : FormGroup | undefined;
  afficherLeFormulaire = false;
  dataSource!:MatTableDataSource<Navire[]>;
  itemsPerPage: number = 10;
  constructor(private NavireService : NavireService, private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handlegetNavires();
    }
  handleSearchNavires() {
    let kw=this.searchFormGroup?.value.keyword;
    this.Navires=this.NavireService.searchNavires( kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
  handlegetNavires(){
    this.Navires=this.NavireService.getNavires().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteNavire(n: Navire) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.NavireService.deleteNavire(n.id_Navire).subscribe({
      next : (resp) => {
        this.Navires=this.Navires.pipe(
          map(data=>{
            let index=data.indexOf(n);
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
  afficherFormulaire(navire: Navire) {
    this.afficherLeFormulaire = true;
    this.router.navigateByUrl("/admin/formulaire/"+navire.id_Navire,{state :navire});
  }

}
