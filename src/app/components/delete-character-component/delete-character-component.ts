import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api-servcice';

@Component({
  selector: 'app-delete-character-component',
  imports: [],
  templateUrl: './delete-character-component.html',
  styleUrl: './delete-character-component.css',
})
export class DeleteCharacterComponent {

  @Input() id: number | string | null = null;
  @Output() deleted = new EventEmitter<void>();

  constructor(private apiService: ApiService) {}

  deleteCharacter() {
    if (this.id === null) return;
    this.apiService.deleteCharacter(this.id).subscribe({
      next: () => {
        this.deleted.emit(); // ← avisa al padre
      },
      error: (e: any) => console.log('Error DELETE:', e)
    });
  }
}