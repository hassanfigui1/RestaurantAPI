import { Component } from '@angular/core';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent {

  menu ={
    title:'',
    inventory_code:0,
    menu_price:0
  }

  list_of_menus: any[] = [];
  


  addMenu(){
    this.list_of_menus.push(this.menu); 
    console.log(this.list_of_menus)
  }

}
