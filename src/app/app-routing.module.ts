import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"items",
    component:ItemsComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"chat",
    component:ChatComponent
  },
  {
    path:"**",
    component:ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
