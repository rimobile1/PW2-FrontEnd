import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {

      projetos=[{"nome" :"Projeto 1","sala" :"Lab8","turma" :"2Q"},
                {"nome" :"Projeto 2","sala" :"Lab9","turma" :"3Q"}];


  constructor() { }

  ngOnInit() {
  }

}
