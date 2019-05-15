import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

const apiUrl = 'http://gateway.marvel.com/v1/public/characters';

const ts = new Date().getTime();
const PRIV_KEY = '2183109a47a13c37e86934ab9867e747b729a115';
const PUBLIC_KEY = '8ca0518c7fafefd3f0dc5eee818d10e1';
const hash = Md5.hashStr(ts + PRIV_KEY + PUBLIC_KEY).toString();

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }

  getHeros(): any {
    return this.http.get(apiUrl + '?ts=' + ts + '&orderBy=name&limit=10&apikey=' + PUBLIC_KEY + '&hash=' + hash);
  }
  // .subscribe((dados: any) => console.log(dados.data.results));
}
