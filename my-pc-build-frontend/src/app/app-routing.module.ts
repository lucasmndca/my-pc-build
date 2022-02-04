import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpusComponent } from './components/screens/cpus/cpus.component';
import { HomeComponent } from './components/screens/home/home.component';
import { MyBuildsComponent } from './components/screens/my-builds/my-builds.component';
import { NewBuildComponent } from './components/screens/new-build/new-build.component';
import { PsusComponent } from './components/screens/psus/psus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'my-builds', component: MyBuildsComponent},
  {path: 'new-build', component: NewBuildComponent},
  {path: 'cpus', component: CpusComponent},
  {path: 'psus', component: PsusComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
