import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sidemenu',
    loadChildren: () => import('./pages/sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },
  {
    path: 'organization',
    loadChildren: () => import('./pages/organization/organization.module').then( m => m.OrganizationPageModule)
  },
  {
    path: 'boreholeinformation',
    loadChildren: () => import('./pages/boreholeinformation/boreholeinformation.module').then( m => m.BoreholeinformationPageModule)
  },
  {
    path: 'logginginformation',
    loadChildren: () => import('./pages/logginginformation/logginginformation.module').then( m => m.LogginginformationPageModule)
  },
  {
    path: 'layer4',
    loadChildren: () => import('./pages/layer4/layer4.module').then( m => m.Layer4PageModule)
  },
  {
    path: 'viewlist',
    loadChildren: () => import('./pages/viewlist/viewlist.module').then( m => m.ViewlistPageModule)
  },
  {
    path: 'update1',
    loadChildren: () => import('./update1/update1.module').then( m => m.Update1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
