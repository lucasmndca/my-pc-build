import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './components/screens/home/home.component';
import { NewBuildComponent } from './components/screens/new-build/new-build.component';
import { MyBuildsComponent } from './components/screens/my-builds/my-builds.component';
import { CpusComponent } from './components/screens/cpus/cpus.component';
import { AppRoutingModule } from './app-routing.module';
import { PsusComponent } from './components/screens/psus/psus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewBuildComponent,
    MyBuildsComponent,
    CpusComponent,
    PsusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
