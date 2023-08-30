import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavireService} from "../services/navire.service";
import {Router} from "@angular/router";
import {Navire} from "../model/navire.model";

@Component({
  selector: 'app-new-navire',
  templateUrl: './new-navire.component.html',
  styleUrls: ['./new-navire.component.css']
})
export class NewNavireComponent implements OnInit{
  newNavireFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private NavireService:NavireService, private router:Router) { }

  ngOnInit(): void {
    this.newNavireFormGroup=this.fb.group({
      id_Navire : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      nom_Navire : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      taille_Navire : this.fb.control(null,[Validators.required, Validators.minLength(4)]),
      date_arrivee: this.fb.control(null, [Validators.required ])
    });
  }

  handleSaveNavire() {
    let Navire:Navire =this.newNavireFormGroup.value;
    this.NavireService.saveNavire(Navire).subscribe({
      next : data=>{
        alert("Navire has been successfully saved!");

        this.router.navigateByUrl("/admin/Navire");
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
