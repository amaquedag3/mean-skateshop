import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UserlogComponent } from './components/userlog/userlog.component';
import { AdminComponent } from './components/admin/admin.component';
import { MiscomprasComponent } from './components/miscompras/miscompras.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'userlogPane', component: UserlogComponent },
    { path: 'adminPane', component: AdminComponent },
    { path: 'miscomprasPane', component: MiscomprasComponent }
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}