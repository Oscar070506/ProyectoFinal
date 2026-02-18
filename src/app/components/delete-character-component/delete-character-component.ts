import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../services/api-servcice';
import { Character } from '../../Models/character';

@Component({
  selector: 'app-delete-character-component',
  imports: [],
  templateUrl: './delete-character-component.html',
  styleUrl: './delete-character-component.css',
})
export class DeleteCharacterComponent {

  character: Character | null = null;
  id: number | null = null;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  deleteCharacter (id: number | null) {
    if (id === null) return;
    this.apiService.deleteCharacter(id).subscribe({
      next: () => {
        this.cdr.detectChanges();
        this.apiService.updateCharacterList();
      },
      error: (e: any) => console.log('Error DELETE:', e)
    });
  }
}
