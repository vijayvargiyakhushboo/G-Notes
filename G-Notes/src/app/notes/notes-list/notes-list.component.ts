import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
notes:any[]
  constructor(private noteService: NoteService) { }

  ngOnInit() {
  	this.notes = this.noteService.getNotes()
  	this.noteService.notesChange.subscribe((res)=> {
  		this.notes = res
  	})
  }
  onEdit(index:number){
  	this.noteService.editNote.next(index)
  }

}
