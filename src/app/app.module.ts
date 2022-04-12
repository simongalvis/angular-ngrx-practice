import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppReduxModule } from './app-redux.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AppReduxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
