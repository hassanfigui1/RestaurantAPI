import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedMenuListService {
  list_of_menus: any[] = [];

  constructor(private http: HttpClient) { }

  createMenu(menu : any){
    alert("createmenu");
    return this.http.post("http://127.0.0.1:8000/api/menu-items", this.list_of_menus);
  }
  getMenu(){
    return this.http.get("http://127.0.0.1:8000/api/menu-items");
  }



}
