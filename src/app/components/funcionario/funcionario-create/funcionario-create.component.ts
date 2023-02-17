import { Funcionario } from './../../../models/funcionatios';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css'],
})
export class FuncionarioCreateComponent implements OnInit {
  success: boolean = false;
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

  constructor(private service: FuncionarioService) {}

  ngOnInit(): void {}

  save(): void {
    this.service.save(this.funcionario).subscribe(
      response => {
        this.success = true;
      },
      (errorResponse) => {
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
