import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedMenuListService {
  list_of_menus: any[] = [];
  private url = "http://127.0.0.1:8000/"
  constructor(private http: HttpClient) { }

  createMenu(menu : any){
    alert("createmenu");
    return this.http.post(this.url+ "api/menu-items", menu);
  }
  getMenu(){
    return this.http.get(this.url+"api/menu-items");
  }
  deleteMenu(id:any){
    return this.http.delete(this.url+"api/menu-items/"+id)
  }


}
