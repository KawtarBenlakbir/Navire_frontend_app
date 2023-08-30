import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EquipeService} from "../services/equipe.service";
import {Equipe} from "../model/equipe.model";

@Component({
  selector: 'app-new-equipe',
  templateUrl: './new-equipe.component.html',
  styleUrls: ['./new-equipe.component.css']
})
export class NewEquipeComponent implements OnInit{
  newEquipeFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private EquipeService:EquipeService, private router:Router) { }

  ngOnInit(): void {
    this.newEquipeFormGroup=this.fb.group({
      matricule_Equipe: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      nombre_Membre: this.fb.control(null, [Validators.required, Validators.minLength(1)]),
    });
  }

  handleSaveEquipe() {
    let Equipe:Equipe=this.newEquipeFormGroup.value;
    this.EquipeService.saveEquipe(Equipe).subscribe({
      next : data=>{
        alert("Equipe has been successfully saved!");

        this.router.navigateByUrl("/admin/Equipe");
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
