import { Component } from '@angular/core';
import { AddCharacterComponent } from '../../components/add-character-component/add-character-component';
import { HeaderComponent } from '../../components/header-component/header-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-character-page',
  imports: [AddCharacterComponent, HeaderComponent, RouterLink],
  templateUrl: './add-character-page.html',
  styleUrl: './add-character-page.css',
})
export class AddCharacterPage {

}
