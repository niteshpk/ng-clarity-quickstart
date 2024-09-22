import { Routes } from '@angular/router';
import { FirstComponent } from './pages/user-pages/first/first.component';
import { SecondComponent } from './pages/user-pages/second/second.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { SignupPageComponent } from './pages/auth/signup-page/signup-page.component';
import { ForgetPasswordPageComponent } from './pages/auth/forget-password-page/forget-password-page.component';
import { ResetPasswordPageComponent } from './pages/auth/reset-password-page/reset-password-page.component';
import { AuthPagesComponent } from './pages/auth/auth-pages/auth-pages.component';
import { UserPagesComponent } from './pages/user-pages/user-pages.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPagesComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'signup',
        component: SignupPageComponent,
      },
      {
        path: 'forget-password',
        component: ForgetPasswordPageComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordPageComponent,
      },
    ],
  },
  {
    path: 'user',
    component: UserPagesComponent,
    children: [
      {
        path: 'first-page',
        component: FirstComponent,
      },
      {
        path: 'second-page',
        component: SecondComponent,
      },
    ],
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
