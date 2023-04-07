import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  //{ path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[AuthGuard] },
  { path:'', component:WelcomeComponent },
  { path:'signin', component:SigninComponent },
  { path:'signup', component:SignupComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate:[AuthGuard]  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
