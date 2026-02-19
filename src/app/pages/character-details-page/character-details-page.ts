import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from '../../components/character-details-component/character-details-component';
import { HeaderComponent } from '../../components/header-component/header-component';

@Component({
  selector: 'app-character-details-page',
  standalone: true,
  imports: [CommonModule, CharacterDetailsComponent, HeaderComponent],
  templateUrl: './character-details-page.html',
  styleUrl: './character-details-page.css',
})
export class CharacterDetailsPage {}