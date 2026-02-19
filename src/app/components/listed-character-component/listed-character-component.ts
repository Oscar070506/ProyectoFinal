import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-servcice';
import { Character } from '../../Models/character';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DeleteCharacterComponent } from '../delete-character-component/delete-character-component';
@Component({
  selector: 'app-listed-character-component',
  standalone: true,
  imports: [CommonModule, DeleteCharacterComponent],
  templateUrl: './listed-character-component.html',
  styleUrl: './listed-character-component.css',
})

export class ListedCharacterComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router)
  {}

  ngOnInit(): void {
    console.log('Componente LISTED inicializado');
    this.getAllCharacters();
  }

  onDeleted(id: number | string): void {
    // Filtra el personaje borrado del array local sin recargar la página
    this.characters = this.characters.filter(c => c.id !== id);
    this.cdr.detectChanges();
  }

  getAllCharacters(): void {
    console.log('Llamando a la API...');
    this.apiService.getAllCharacters().subscribe({
      next: (resp: Character[]) => {
        console.log('RESPUESTA API:', resp);
        this.characters = resp;
        this.cdr.detectChanges();
      },
      error: (e: any) => console.log('Error GET:', e)
    });
  }

  getToDetails(index  : number | string): void {
    this.router.navigate(['/character-details', index]);
  }

}
