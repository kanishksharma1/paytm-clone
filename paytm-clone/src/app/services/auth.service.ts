import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { signup } from '../models/signup.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // signup : any;

  constructor(private http: HttpClient) { }

  signupData(signupDetails: signup): Observable<signup> {
   return this.http.post<signup>("https://localhost:7054/api/Auth", signupDetails)
  }
}
