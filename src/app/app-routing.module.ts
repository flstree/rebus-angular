import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      useHash: false,
      scrollPositionRestoration: "top",
      onSameUrlNavigation: 'reload',
      urlUpdateStrategy: 'eager'
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
