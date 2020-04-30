import { EventEmitter } from '@angular/core';
import { Notes } from './notes.model';
import { Observable,of,from } from 'rxjs';
//import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs';

export class NoteService {
	private notes=[
 new Notes('Test1','This is for body1 '),
 new Notes('Test 2','This is for body2 '),
 new Notes('Test 3','Today is 30 April')]
 editNote = new Subject<number>();
 notesChange= new Subject<Notes[]>()
constructor() {

}
getNotes() {
	return this.notes.slice();
}	
getNote(index:number){
	return this.notes[index]
}
addNote(note:Notes){
	this.notes.push(note)
	this.notesChange.next(this.notes.slice())
}

updateNote(index:number,updateNoteData:Notes){
	this.notes[index]= updateNoteData
	this.notesChange.next(this.notes.slice())
}
} 