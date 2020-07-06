import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  stt:any;
  path:string='http://localhost:49889/api/User/'
  constructor(private _client:HttpClient) { }
  public AddUser(item:User):Observable<string>
  {
    try
    {
      console.log("11111111");
    return this._client.post<string>(this.path+'AddUser',item);
    }
    catch
    {
      
    }
    
  }
  public Login(email:string,password:string):Observable<any>
  {
    return this._client.get<any>(this.path+'Validate/'+email+'/'+password);
  }

}
