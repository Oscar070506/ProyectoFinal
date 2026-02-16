import { Component } from '@angular/core';
import { ListedCharacterComponent } from '../../components/listed-character-component/listed-character-component';
import { HeaderComponent } from '../../components/header-component/header-component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ListedCharacterComponent, HeaderComponent],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})
export class ListPage {

}
