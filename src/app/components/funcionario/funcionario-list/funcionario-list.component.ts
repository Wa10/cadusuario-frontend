import { Funcionario } from './../../../models/funcionatios';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css'],
})
export class FuncionarioListComponent implements OnInit {
  DATA: Funcionario[] = [];
  displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'email', 'nis', 'função'];
  dataSource = new MatTableDataSource<Funcionario>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private service: FuncionarioService,
    private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }
  
  findAll() {
    this.service.findAll().subscribe((response) => {
      this.dataSource = new MatTableDataSource<Funcionario>(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  deletar(id: number): void{    
    this.service.delete(id).subscribe(() => {
    this.findAll();
    }, ex => {
      
    });
  }
}
