import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './components/screens/home/home.component';
import { NewBuildComponent } from './components/screens/new-build/new-build.component';
import { MyBuildsComponent } from './components/screens/my-builds/my-builds.component';
import { CpusComponent } from './components/screens/cpus/cpus.component';
import { AppRoutingModule } from './app-routing.module';
import { PsusComponent } from './components/screens/psus/psus.component';
import { AddCpuComponent } from './components/screens/cpus/add-cpu/add-cpu.component';
import { ManageCpuComponent } from './components/screens/cpus/manage-cpu/manage-cpu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewBuildComponent,
    MyBuildsComponent,
    CpusComponent,
    PsusComponent,
    AddCpuComponent,
    ManageCpuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
