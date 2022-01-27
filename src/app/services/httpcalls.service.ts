import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpcallsService {

  constructor(public httpClient: HttpClient) { }

  logionService(useri: any,password: any){
    const parameters ={userid:useri,upwd:password};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/blogin`, JSON.stringify(parameters));

  }
}
