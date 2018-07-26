import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { UsuarioComponent } from './usuario/usuario.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 0efa7180314053e50770058fc42c74ec414033b5

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UsuarioComponent
=======
    HomeComponent
>>>>>>> 0efa7180314053e50770058fc42c74ec414033b5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
