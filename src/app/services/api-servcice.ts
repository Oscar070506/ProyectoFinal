import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../Models/character';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly API_URL = 'https://699098e66279728b0152d393.mockapi.io/Shrek_Characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.API_URL);
  }

  getCharacterById(id: number | string): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/${id}`);
  }

  postCharacter(character: any) {
    return this.http.post(this.API_URL, character);
  }

  putCharacter(id: number | string, character: any) {
    return this.http.put(`${this.API_URL}/${id}`, character);
  }

  deleteCharacter(id: number | string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
