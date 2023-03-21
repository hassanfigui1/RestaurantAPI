import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedMenuListService {
  list_of_menus: any[] = [];

  constructor() { }
}
