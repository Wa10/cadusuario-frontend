import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { LoginComponent } from './components/login/login.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'funcionarios',
        component: FuncionarioListComponent,
      },
      { path: 'funcionarios/create', 
      component: FuncionarioCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
