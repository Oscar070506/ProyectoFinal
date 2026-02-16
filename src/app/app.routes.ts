import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { EditPage } from './pages/edit-page/edit-page';

export const routes: Routes = [
    { path: 'home-page', component: HomePage },          
    { path: 'list-page', component: ListPage },
    // Se va a la edit-user-page del usuario en concreto que queremos editar
    { path: 'edit-user-page/:index', component: EditPage }
    
];