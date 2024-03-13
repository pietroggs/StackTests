import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivosListComponent } from './components/ativos-list/ativos-list.component';
import { AddAtivoComponent } from './components/add-ativo/add-ativo.component';
import { EditAtivoComponent } from './components/edit-ativo/edit-ativo.component';

const routes: Routes = [
  {
    path: '',
    component: AtivosListComponent
  },
  {
    path:'ativos',
    component: AtivosListComponent
  },
  {
    path:'ativos/add',
    component: AddAtivoComponent
  },
  {
    path:'ativos/edit/:id',
    component: EditAtivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
