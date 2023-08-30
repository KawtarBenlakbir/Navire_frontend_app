import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GrueService} from "../services/grue.service";
import {Grue} from "../model/grue.model";

@Component({
  selector: 'app-new-grue',
  templateUrl: './new-grue.component.html',
  styleUrls: ['./new-grue.component.css']
})
export class NewGrueComponent implements OnInit{
  newGrueFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private GrueService:GrueService, private router:Router) { }

  ngOnInit(): void {
    this.newGrueFormGroup=this.fb.group({
      matricule_grue: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      nom_grue: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      taille_Grue: this.fb.control(null, [Validators.required, Validators.minLength(4)])
    });
  }

  handleSaveGrue() {
    let Grue:Grue=this.newGrueFormGroup.value;
    this.GrueService.saveGrue(Grue).subscribe({
      next : data=>{
        alert("Grue has been successfully saved!");

        this.router.navigateByUrl("/admin/Grue");
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
