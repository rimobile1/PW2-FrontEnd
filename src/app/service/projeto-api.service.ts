import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, from } from 'rxjs';
import { Projeto } from '../model/projeto';

import{retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {

    //apiURL: string="http://quiteriaetec.somee.com/api/";
    apiURL: string="/proxy/Projetos";

  constructor(private httpClient: HttpClient) { }

      handleError(error){

        let errorMessage = `Código de erro : ${error.status}\nMensagem: ${error.menssage}`;
        alert(errorMessage);
        return throwError(errorMessage);
      }

      getProjetos() :Observable<Projeto[]> {

          return this.httpClient.get<Projeto[]>(this.apiURL)
          .pipe(retry(1),
          catchError(this.handleError))

      }

      createProjeto(projeto: Projeto): Observable<Projeto> {
        return this.httpClient.post<Projeto>(this.apiURL, projeto)
        .pipe(retry(1),
        catchError(this.handleError));
        }

}
