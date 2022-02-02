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
  {
    path: 'update2',
    loadChildren: () => import('./pages/update2/update2.module').then( m => m.Update2PageModule)
  },
  {
    path: 'update3',
    loadChildren: () => import('./pages/update3/update3.module').then( m => m.Update3PageModule)
  },
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then( m => m.ExamplePageModule)
  },
  {
    path: 'update4',
    loadChildren: () => import('./pages/update4/update4.module').then( m => m.Update4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
