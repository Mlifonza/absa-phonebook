import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  baseUrl = environment.url;
  constructor(private http: HttpClient) { }

  get = async (apiUrl: string): Promise<any> => {
    return await this.http.get(this.baseUrl + apiUrl, {
      headers: {"Access-Control-Allow-Origin":"*"}
    })
    .pipe(
      retry(3)
    )
    .toPromise()
    .then(res => {
      return res;
    })
  }

  post = async (apiUrl: string, payload: any): Promise<any> => {
    return await this.http.post(this.baseUrl + apiUrl, payload,  {
      headers: {"Access-Control-Allow-Origin":"*"}
    })
    .pipe(
      retry(3)
    )
    .toPromise()
    .then(res => {
      return res;
    })
  }
}
