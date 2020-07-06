import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answerresponse } from '../Models/answerresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerresponseService {
  stt:any;
  path:string='http://localhost:49889/api/AnswerResponse/'
  constructor(private _client:HttpClient) { }
  public AddAnswerResponse(item:Answerresponse):Observable<string>
  {
    return this._client.post<string>(this.path+'AddAnswerResponse',item);
  }
  public GetAnswerResponse(userId): Observable<Answerresponse[]>
  {
    return this._client.get<Answerresponse[]>(this.path+'GetAnswerResponseById/'+userId);
  }
}
