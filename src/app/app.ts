import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPage } from './pages/list-page/list-page';
import { HeaderComponent } from "./components/header-component/header-component";
import { Home } from "./components/home/home";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListPage, HeaderComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyectoFinal');
}
