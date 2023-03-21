import { Component } from '@angular/core';
import { SharedMenuListService } from '../shared-menu-list.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent {

  constructor(public _sharedList_menus: SharedMenuListService){}
  menu ={
    title:'',
    inventory_code:0,
    menu_price:0
  }
  


  addMenu(){
    this._sharedList_menus.list_of_menus.push(this.menu); 
    console.log(this._sharedList_menus);
    this.menu ={
      title:'',
      inventory_code:0,
      menu_price:0
    }
    
  }

}
