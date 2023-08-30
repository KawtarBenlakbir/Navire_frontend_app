import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Grue} from "../model/grue.model";
import {Navire} from "../model/navire.model";
import {Equipe} from "../model/equipe.model";

@Injectable({
  providedIn: 'root'
})
export class GrueService {
  constructor(private http:HttpClient) { }

  public getGrues():Observable<Array<Grue>>{
    return this.http.get<Array<Grue>>(environment.backendHost+"/Grues")
  }
  public searchGrue(keyword : string):Observable<Array<Grue>>{
    return this.http.get<Array<Grue>>(environment.backendHost+"/Grues/search?keyword="+keyword)
  }

  public saveGrue(Grue: Grue):Observable<Grue>{
    return this.http.post<Grue>(environment.backendHost+"/Grues",Grue);
  }
  public deleteGrue(id: string){
    return this.http.delete(environment.backendHost+"/Grues/"+id);
  }
}
