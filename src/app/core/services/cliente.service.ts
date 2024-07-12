import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL_BACKEND } from '../../shared/utils/constans';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private url = `${BASE_URL_BACKEND}/cliente`;

  constructor(
    private  http: HttpClient // defini mi httmm
  ) { }
  
  async listarCliente(){
    const observable = this.http.get(this.url);
    return await lastValueFrom(observable);
  }

}
