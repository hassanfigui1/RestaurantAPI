import { Component } from '@angular/core';
import { SharedMenuListService } from '../shared-menu-list.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  constructor(public _shareListMenu: SharedMenuListService){}
  list_of_menus : any;
 

  ngOnInit(): void{
    this._shareListMenu.getMenu().subscribe(
      res=>{
        console.log(res);
        this.list_of_menus = res;
      },
      err=>{
        console.log(err);
      }
    )
  }
  deleteMenu(id:any){
    this._shareListMenu.deleteMenu(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log("error"+err);
      }
    )
  }







}
