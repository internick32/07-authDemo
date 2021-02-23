import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { ProtegidaComponent } from './componets/protegida/protegida.component';
import { PreciosComponent } from './componets/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'trigalo.us.auth0.com',
      clientId: 'wEu5j9TqCfXOvYdIq9t7pzjRPUpIaekp'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
