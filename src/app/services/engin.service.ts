import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Engin} from "../model/engin.model";

@Injectable({
  providedIn: 'root'
})
export class EnginService {
  constructor(private http:HttpClient) { }

  public getEngins():Observable<Array<Engin>>{
    return this.http.get<Array<Engin>>(environment.backendHost+"/Engins")
  }

  public searchEngins(keyword : string):Observable<Array<Engin>>{
    return this.http.get<Array<Engin>>(environment.backendHost+"/Engins/search?keyword="+keyword)
  }
  public saveEngin(Engin: Engin):Observable<Engin>{
    return this.http.post<Engin>(environment.backendHost+"/Engins",Engin);
  }
  public deleteEngin(id: string){
    return this.http.delete(environment.backendHost+"/Engins/"+id);
  }
}
