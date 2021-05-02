import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LatizComponent } from './components/latiz/latiz.component';
import { LatderComponent } from './components/latder/latder.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { UserlogComponent } from './components/userlog/userlog.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AltasUserComponent } from './components/altas-user/altas-user.component';
import { MiscomprasComponent } from './components/miscompras/miscompras.component';
import { AppRoutingModule } from './app.routing.module';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'userlogPane', component: UserlogComponent },
  { path: 'adminPane', component: AdminComponent },
  { path: 'miscomprasPane', component: MiscomprasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LatizComponent,
    LatderComponent,
    FooterComponent,
    CarritoComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    UserlogComponent,
    AltasUserComponent,
    MiscomprasComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
