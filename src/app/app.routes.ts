import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { EditPage } from './pages/edit-page/edit-page';
import { AddCharacterPage } from './pages/add-character-page/add-character-page';
import { CharacterDetailsPage } from './pages/character-details-page/character-details-page';

export const routes: Routes = [
    { path: 'home-page', component: HomePage },          
    { path: 'list-page', component: ListPage },
    { path: 'character-details/:index', component: CharacterDetailsPage },
    // Se va a la edit-character-page del personaje en concreto que queremos editar
    { path: 'edit-page/:index', component: EditPage },
    { path: 'add-character-page', component: AddCharacterPage}
    
];