import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedMenuListService } from '../shared-menu-list.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent {

  menu_items : any;
  id: any;

  constructor(private act: ActivatedRoute, private _sharedService :SharedMenuListService ){}

  updateMenuItem(){
    this._sharedService.updateMenuItem(this.id,this.menu_items).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

  ngOnInit():void{
    this.id = this.act.snapshot.paramMap.get('id');
    this._sharedService.getMenuItemById(this.id).subscribe(
      res=>{
        this.menu_items = res;
      },
      err=>{
        console.log("error :"+err);
      }
    )
  }

  
  

}
