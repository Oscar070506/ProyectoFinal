import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-servcice';
import { Character } from '../../Models/character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listed-character-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listed-character-component.html',
  styleUrl: './listed-character-component.css',
})
export class ListedCharacterComponent implements OnInit {

  characters: Character[] = [];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
  console.log('Componente LISTED inicializado');
  this.getAllCharacters();
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

}
