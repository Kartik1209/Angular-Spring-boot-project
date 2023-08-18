import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofieService {

  constructor(private httpClient : HttpClient) { }

  getProfileById(id:any){
    return this.httpClient.get("http://localhost:6666/profile/user/"+id);
  }
  demo(){
    return this.httpClient.get('http://localhost:8686/demo');
  }

  addNewProfile(profile:{profileId:any,personalInfo:any,email:any,gender:any,mobileNo:any}){
    return this.httpClient.post("http://localhost:8686/add",profile);
  }
}
