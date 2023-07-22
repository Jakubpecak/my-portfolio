import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  private url = 'http://localhost:3000/message';

  constructor(private http: HttpClient) {}


  sendMessage(formData: Message) {
    return this.http.post(this.url, formData);
  }

  

}
