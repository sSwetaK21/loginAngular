import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI="http://localhost:3000/user"
  constructor(private http:HttpClient) { }

  getAll(){
    // return this.http.get("http://localhost:3000/user")
    return this.http.get(this.baseAPI);
  }

  getById(id:number){
    return this.http.get(`http://localhost:3000/user/+${id}`)
  }

  register(inputData :any){
    return this.http.post(this.baseAPI,inputData)
  }


  update(inputData:any, id:number){
    return this.http.put(this.baseAPI+'/'+id, inputData)
  }


}
