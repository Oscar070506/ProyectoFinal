import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../Models/character';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly BASE_URL = 'https://699098e66279728b0152d393.mockapi.io/Shrek_Characters';

  constructor(private http: HttpClient) {}

  // GET (lista)
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.BASE_URL);
  }

  // GET (detalle por id)
  getCharactersById(id: number | string): Observable<Character> {
    return this.http.get<Character>(`${this.BASE_URL}/${id}`);
  }
}
