import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api-servcice';
import { Character } from '../../Models/character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-details-component',
  imports: [CommonModule],
  templateUrl: './character-details-component.html',
  styleUrl: './character-details-component.css',
})
export class CharacterDetailsComponent implements OnInit {

  character: Character | null = null;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['index'];
      this.getToCharacterDetails(this.id);
    });
  }

  getToCharacterDetails(id: number | null): void {
    if (id === null) return;
    this.apiService.getCharacterById(id).subscribe({
      next: (resp: Character) => {
        this.character = resp;
        this.cdr.detectChanges();
      },
      error: (e: any) => console.log('Error GET:', e)
    });
  }

  goBack(): void {
    this.router.navigate(['/list-page']);
  }

}
