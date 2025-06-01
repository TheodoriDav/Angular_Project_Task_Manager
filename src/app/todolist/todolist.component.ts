import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

}
@NgModule({
  imports: [CommonModule, TodolistComponent],
  bootstrap: [TodolistComponent]
})
export class AppModule {}