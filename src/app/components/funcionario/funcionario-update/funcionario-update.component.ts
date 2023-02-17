import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionatios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {
  error: boolean = false;

  errorApi: string;

  funcionario: Funcionario = {
    id: null,
    nome: '',
    sobrenome: '',
    email: '',
    nis: null,
  };

  durationInSeconds = 5;

  nome = new FormControl(null, [Validators.min(2), Validators.min(30)]);
  sobrenome = new FormControl(null, [Validators.min(2), Validators.min(50)]);
  email = new FormControl(null, Validators.email);
  nis = new FormControl(null, Validators.required);

  constructor(
    private service: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.funcionario.id = Number(this.route.snapshot.paramMap.get('id'));
    this.findById();
  }

  findById(): void {
    this.service.findById(this.funcionario.id).subscribe( response => this.funcionario = response)
  }

  update(): void {
    this.service.update(this.funcionario).subscribe(
      response => {
        this.router.navigate(['funcionarios'])
      },
      (errorResponse) => {
        console.log(errorResponse)
        this.errorApi = errorResponse.error.error;
        this.error = true;
      }
    );
  }

  validacao(): boolean {
    return (
      this.nome.valid &&
      this.sobrenome.valid &&
      this.email.valid &&
      this.nis.valid
    );
  }

}
