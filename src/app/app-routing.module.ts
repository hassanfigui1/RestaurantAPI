import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSectionComponent } from './add-section/add-section.component';
import { SectionComponent } from './section/section.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';

const routes: Routes = [
  {path:'add-menu', component:AddSectionComponent},
  {path:'menu-items', component:SectionComponent},
  {path:'update-menu/:id', component:UpdateMenuComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
