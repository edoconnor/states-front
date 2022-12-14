import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateListComponent } from './state-list/state-list.component';
import { StateDetailsComponent } from './state-details/state-details.component';
 

const routes: Routes = [
  {path: '', redirectTo: 'states', pathMatch: 'full' },
  {path: 'states', component: StateListComponent },
  {path: 'states/:id', component: StateDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
