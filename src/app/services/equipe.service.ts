import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Grue} from "../model/grue.model";
import {environment} from "../../environments/environment";
import {Equipe} from "../model/equipe.model";
import {Engin} from "../model/engin.model";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  constructor(private http:HttpClient) { }

  public getEquipes():Observable<Array<Equipe>>{
    return this.http.get<Array<Equipe>>(environment.backendHost+"/Equipes")
  }

  public searchEquipes(keyword : string):Observable<Array<Equipe>>{
    return this.http.get<Array<Equipe>>(environment.backendHost+"/Equipes/search?keyword="+keyword)
  }
  public saveEquipe(Equipe: Equipe):Observable<Equipe>{
    return this.http.post<Equipe>(environment.backendHost+"/Equipes",Equipe);
  }
  public deleteEquipe(id: string){
    return this.http.delete(environment.backendHost+"/Equipes/"+id);
  }
}
