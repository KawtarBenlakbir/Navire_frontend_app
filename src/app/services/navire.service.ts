import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Navire} from "../model/navire.model";
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class NavireService {

  constructor(private http:HttpClient) { }

  public getNavires():Observable<Array<Navire>>{
    return this.http.get<Array<Navire>>(environment.backendHost+"/Navires")
  }

  public searchNavires(keyword: string ):Observable<Array<Navire>>{
    return this.http.get<Array<Navire>>(environment.backendHost+"/Navires/search?keyword="+keyword)
  }
  public saveNavire(Navire: Navire):Observable<Navire>{
    return this.http.post<Navire>(environment.backendHost+"/Navires",Navire);
  }
  public deleteNavire(id: string){
    return this.http.delete(environment.backendHost+"/Navires/"+id);
  }
}
