import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent}, // , canActivate: [GuardGuard] sugiere corsico para que la url no sea visible para cualquiera. -- Al ahacerlo no se vio más mi website
  {path: '',redirectTo: 'portfolio',pathMatch: 'full'} , 
  {path: 'iniciar-sesion', component: IniciarSesionComponent }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
