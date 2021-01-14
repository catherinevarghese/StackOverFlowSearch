import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'list-page', loadChildren: () => import('./list/list.module').then(m => m.ListModule)},
   {path: '**', loadChildren: () => import('./list/list.module').then(m => m.ListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
