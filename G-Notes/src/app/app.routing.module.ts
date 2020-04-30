import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NotesComponent } from './notes/notes/notes.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';

const appRoutes= [
{
 path: '',
 component: LoginComponent 
},
{
 path: 'notes',
 component: HeaderComponent
}]

@NgModule({
declarations: [],
imports: [
RouterModule.forRoot(appRoutes),
FormsModule],
exports: [RouterModule],
providers:[]

})
export class AppRoutingModule {

}