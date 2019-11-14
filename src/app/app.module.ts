import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { NovoProjetosComponent } from './novo-projetos/novo-projetos.component';
import { DetalheProjetosComponent } from './detalhe-projetos/detalhe-projetos.component';
import { EditarProjetosComponent } from './editar-projetos/editar-projetos.component';

import{HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaProjetosComponent,
    NovoProjetosComponent,
    DetalheProjetosComponent,
    EditarProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
