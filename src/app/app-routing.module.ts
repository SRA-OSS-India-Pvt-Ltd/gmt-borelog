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
  {
    path: 'web1',
    loadChildren: () => import('./pages/web1/web1.module').then( m => m.Web1PageModule)
  },
  {
    path: 'web2',
    loadChildren: () => import('./pages/web2/web2.module').then( m => m.Web2PageModule)
  },
  {
    path: 'web3',
    loadChildren: () => import('./pages/web3/web3.module').then( m => m.Web3PageModule)
  },
  {
    path: 'web4',
    loadChildren: () => import('./pages/web4/web4.module').then( m => m.Web4PageModule)
  },
  {
    path: 'nonedit1',
    loadChildren: () => import('./pages/nonedit1/nonedit1.module').then( m => m.Nonedit1PageModule)
  },
  {
    path: 'nonedit2',
    loadChildren: () => import('./pages/nonedit2/nonedit2.module').then( m => m.Nonedit2PageModule)
  },
  {
    path: 'nonedit3',
    loadChildren: () => import('./pages/nonedit3/nonedit3.module').then( m => m.Nonedit3PageModule)
  },
  {
    path: 'nonedit4',
    loadChildren: () => import('./pages/nonedit4/nonedit4.module').then( m => m.Nonedit4PageModule)
  },
  {
    path: 'admindashbord',
    loadChildren: () => import('./pages/admindashbord/admindashbord.module').then( m => m.AdmindashbordPageModule)
  },
  {
    path: 'viewlist1',
    loadChildren: () => import('./pages/viewlist1/viewlist1.module').then( m => m.Viewlist1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
