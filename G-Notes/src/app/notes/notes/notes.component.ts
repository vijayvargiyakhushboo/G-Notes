import { Component, OnInit ,ViewChild } from '@angular/core';
import { NoteService } from './../note.service';
import { Notes } from './../notes.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
 editMode= false;
 editedItemIndex :number
 editedItem: Notes
 @ViewChild ('form') noteForm: NgForm
  constructor(private noteService: NoteService) { }

  ngOnInit() {
  	this.noteService.editNote.subscribe((index:number) => {
  			this.editedItemIndex = index
  			this.editMode =true;
  			this.editedItem = this.noteService.getNote(index)
  			this.noteForm.setValue({
  				title: this.editedItem.title,
  				body:this.editedItem.body
  			})

  		})
  }
  saveNote(form:NgForm){
  	if(form.invalid){
  		return false
  	}
  	const newNote = new Notes(form.value.title,form.value.body)
  	if(this.editMode){
  		this.noteService.updateNote(this.editedItemIndex,newNote)
  		this.editMode = false
  	}else{
  		this.noteService.addNote(newNote)
  	}
  	form.reset()
  	
  }
  addNote(){
    this.editMode = false
    this.noteForm.reset();
  }

}
