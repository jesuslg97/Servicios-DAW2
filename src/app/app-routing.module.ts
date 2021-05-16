import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FatherComponent } from './father/father.component';
import { SonListComponent } from './son-list/son-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'father' },
  { path: 'father', component: FatherComponent },
  { path: 'son-list', component: SonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
