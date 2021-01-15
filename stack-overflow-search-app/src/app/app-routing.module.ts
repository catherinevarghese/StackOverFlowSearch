import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'list-page', loadChildren: () => import('./_pages/list/list.module').then(m => m.ListModule)},
  {path: 'details/:id', loadChildren: () => import('./_pages/details/detail-page.module').then(m => m.DetailPageModule)},
   {path: '**', loadChildren: () => import('./_pages/list/list.module').then(m => m.ListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
