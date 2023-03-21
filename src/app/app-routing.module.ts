import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSectionComponent } from './add-section/add-section.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  {path:'add-menu', component:AddSectionComponent},
  {path:'menu-items', component:SectionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
