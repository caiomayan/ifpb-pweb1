import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { TaskCardComponent } from './task-card.component';
import { Task, TaskStatus } from './task.model';

@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-column.component.html',
})
export class TaskColumnComponent {
  title = input.required<string>();
  status = input.required<TaskStatus>();
  tasks = input.required<Task[]>();

  moveTask = output<{ id: string; status: TaskStatus }>();
  deleteTask = output<string>();
  editTask = output<Task>();

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const taskId = event.dataTransfer?.getData('text/plain');
    if (!taskId) return;
    this.moveTask.emit({ id: taskId, status: this.status() });
  }
}
