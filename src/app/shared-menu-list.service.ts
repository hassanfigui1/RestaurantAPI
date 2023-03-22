import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedMenuListService {
  list_of_menus: any[] = [];

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:8000/';

  createMenu(menu : any){
    return this.http.post(this.url + 'api/menu-items', this.list_of_menus);
  }

}
