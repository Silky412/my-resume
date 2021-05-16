import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {

  
  constructor(private http: HttpClient) { }

  about(): Observable<any> {
    return this.http.get<any>("./assets/db.json").pipe(tap(data => console.log(JSON.stringify(data))))



  }
  download(): Observable<Blob> {
    return this.http.get('../assets/Silkyresume.pdf', {
      responseType: 'blob'
    })
  }
}
