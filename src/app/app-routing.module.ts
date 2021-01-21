import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './views/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users.component';
import { AssetsComponent } from './views/assets/assets.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';
import { UserViewComponent } from './views/users/user-view/user-view.component';
import { UserDetailComponent } from './views/users/user-detail/user-detail.component';
import { AssetViewComponent } from './views/assets/asset-view/asset-view.component';
import { AssetDetailComponent } from './views/assets/asset-detail/asset-detail.component';
import { UserEditComponent } from './views/users/user-edit/user-edit.component';
import { AssetEditComponent } from './views/assets/asset-edit/asset-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'blank',
        component: BlankComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'users/create',
        component: UsersComponent,
      },
      {
        path: 'users/edit/:id',
        component: UserEditComponent,
      },
      {
        path: 'users',
        component: UserViewComponent,
        children: [
          {
            path: ':id',
            component: UserDetailComponent,
          },
        ],
      },
      {
        path: 'assets/create',
        component: AssetsComponent,
      },
      {
        path: 'assets/edit/:id',
        component: AssetEditComponent,
      },
      {
        path: 'assets',
        component: AssetViewComponent,
        children: [
          {
            path: ':id',
            component: AssetDetailComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
