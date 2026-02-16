import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../../components/home/home';
@Component({
  selector: 'app-home-page',
  imports: [Home, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
