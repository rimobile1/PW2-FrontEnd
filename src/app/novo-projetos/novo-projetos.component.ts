import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms'
import { ProjetoApiService } from '../service/projeto-api.service';
import { Projeto } from '../model/projeto';


@Component({
  selector: 'has-novo-projetos',
  templateUrl: './novo-projetos.component.html',
  styleUrls: ['./novo-projetos.component.css']
})
export class NovoProjetosComponent implements OnInit {

  formProjeto: FormGroup

  constructor(private formbuilder: FormBuilder, private projetoapiservice: ProjetoApiService) { }

  ngOnInit() {

    this.formProjeto = this.formbuilder.group({
      nome: this.formbuilder.control(''),
      orientadores: this.formbuilder.control(''),
      sala: this.formbuilder.control(''),
      turma: this.formbuilder.control('')
    })
  }

  onSalvar() {
    let projetos: Projeto = this.formProjeto.value;
    this.projetoapiservice.createProjeto(projetos)
      .subscribe(data => console.log(data),
        error => console.log(error));
  }

}
