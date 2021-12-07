import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<any>{
    return this.http.get(environment.API_URL)
  }
  delete(id:any): Observable<any>{
    return this.http.delete(environment.API_URL + id)
  }

  create(data:any): Observable<any>{
    return this.http.post(environment.API_URL, data)
  }

  findById(id:any):Observable<any>{
    return this.http.get<any>(environment.API_URL + id)
  }

  edit(id: any, data:any): Observable<any> {
    return this.http.put(environment.API_URL + id,data);
  }
}
