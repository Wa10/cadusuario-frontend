import { Funcionario } from './../../../models/funcionatios';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit, AfterViewInit  {
  DATA: Funcionario[] = [
    { 
      id: 1,
      nome: 'teste',
      sobrenome: 'teste',
      email: 'teste@teste.com',
      nis: 123
    }
  ];
  displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'email', 'nis'];
  dataSource = new MatTableDataSource<Funcionario>(this.DATA);

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


