import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/user/user.module').then(u => u.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(l => l.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./modules/registration/registration.module').then(r => r.RegistrationModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/not-found/not-found.module').then(nf => nf.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
