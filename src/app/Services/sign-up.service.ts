import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  
  
  constructor(private http:HttpClient) { }
  SignUp(data:FormGroup):Observable<FormGroup>{
    return this.http.post<FormGroup>('https://demo-api.now.sh/users',data);
        
  }
}
