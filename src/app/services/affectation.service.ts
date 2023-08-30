import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Engin} from "../model/engin.model";
import {environment} from "../../environments/environment";
import {Affectation} from "../model/affectation.model";

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  constructor(private http:HttpClient) { }

  public getAffectations():Observable<Array<Affectation>>{
    return this.http.get<Array<Affectation>>(environment.backendHost+"/Affectations")
  }

  public searchAffectations():Observable<Array<Affectation>>{
    return this.http.get<Array<Affectation>>(environment.backendHost+"/Affectations")
  }
  public searchAffectationparNavires(keyword : string):Observable<Array<Affectation>>{
    return this.http.get<Array<Affectation>>(environment.backendHost+"/Affectations/search?keyword="+keyword)
  }
  public saveAffectation(Affectation: Affectation):Observable<Affectation>{
    return this.http.post<Affectation>(environment.backendHost+"/Affectations",Affectation);
  }
  public deleteAffectation(id: number){
    return this.http.delete(environment.backendHost+"/Affectations/"+id);
  }
}
