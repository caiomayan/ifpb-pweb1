import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'task-manager-app',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager-app-angular');
}

export class taskManager {
  private id: Number;
  private title: String;
  private due: Date;
  private level: String;
  private desc: String;
  private status: String;

  constructor(id: Number, title: String, due: Date, level: String, desc: String, status: String) {
    this.id = id;
    this.title = title;
    this.due = due;
    this.level = level;
    this.desc = desc;
    this.status = status
  };

  
}