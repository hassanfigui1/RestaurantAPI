import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent {

  menu_items : any;
  id: any;

  constructor(private act: ActivatedRoute){}

  updateMenuItem(){}

  ngOnInit():void{
    this.id = this.act.snapshot.paramMap.get('id');
  
  }
  

}
