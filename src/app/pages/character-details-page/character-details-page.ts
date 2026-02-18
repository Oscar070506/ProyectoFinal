import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from '../../components/character-details-component/character-details-component';

@Component({
  selector: 'app-character-details-page',
  imports: [CommonModule, CharacterDetailsComponent],
  templateUrl: './character-details-page.html',
  styleUrl: './character-details-page.css',
})
export class CharacterDetailsPage {

}
