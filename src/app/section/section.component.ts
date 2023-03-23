import { Component } from '@angular/core';
import { SharedMenuListService } from '../shared-menu-list.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  constructor(public _shareListMenu: SharedMenuListService){}
  list_of_menus : any[] = [];
 
  getMenus(){
    this._shareListMenu.getMenu().subscribe(
      data =>{
        console.log(data);
      }
    )
  }







}
