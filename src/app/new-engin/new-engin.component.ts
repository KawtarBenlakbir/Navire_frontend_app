import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EnginService} from "../services/engin.service";
import {Engin} from "../model/engin.model";

@Component({
  selector: 'app-new-engin',
  templateUrl: './new-engin.component.html',
  styleUrls: ['./new-engin.component.css']
})
export class NewEnginComponent implements OnInit{
  newEnginFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private EnginService:EnginService, private router:Router) { }

  ngOnInit(): void {
    this.newEnginFormGroup=this.fb.group({
      matricule_engin: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      capacite_engin : this.fb.control(null, [Validators.required, Validators.minLength(2)]),
      taille_Engin : this.fb.control(null,[Validators.required, Validators.minLength(4)]),
    });
  }

  handleSaveEngin() {
    let Engin:Engin=this.newEnginFormGroup.value;
    this.EnginService.saveEngin(Engin).subscribe({
      next : data=>{
        alert("Engin has been successfully saved!");

        this.router.navigateByUrl("/admin/Engin");
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
