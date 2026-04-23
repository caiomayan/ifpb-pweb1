import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TaskColumnComponent } from './task-column.component';
import { TaskDataService } from './task-data.service';
import { TaskFormComponent, TaskFormValue } from './task-form.component';
import { Task, TaskStatus } from './task.model';

@Component({
  selector: 'task-manager-app',
  imports: [CommonModule, TaskColumnComponent, TaskFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskData = inject(TaskDataService);

  tasks = signal<Task[]>(this.taskData.getInitialTasks());
  showForm = signal(false);
  taskEditing = signal<Task | null>(null);

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.tasks().filter((task) => task.status === status);
  }

  openNewTaskForm(): void {
    this.taskEditing.set(null);
    this.showForm.set(true);
  }

  openEditTaskForm(task: Task): void {
    this.taskEditing.set(task);
    this.showForm.set(true);
  }

  closeForm(): void {
    this.showForm.set(false);
    this.taskEditing.set(null);
  }

  saveTask(data: TaskFormValue): void {
    const currentEditing = this.taskEditing();

    if (currentEditing) {
      this.tasks.update((list) => {
        const updated = [...list];
        const index = updated.findIndex((task) => task.id === currentEditing.id);

        if (index !== -1) {
          updated[index] = {
            ...updated[index],
            title: data.title,
            due: data.due,
            level: data.level,
            desc: data.desc,
          };
        }

        return updated;
      });
    } else {
      const newTask: Task = {
        id: this.generateId(),
        title: data.title,
        due: data.due,
        level: data.level,
        desc: data.desc,
        status: 'todo',
      };
      this.tasks.update((list) => [...list, newTask]);
    }

    this.closeForm();
  }

  deleteTask(taskId: string): void {
    this.tasks.update((list) => list.filter((task) => task.id !== taskId));
  }

  moveTask(event: { id: string; status: TaskStatus }): void {
    this.tasks.update((list) => {
      const updated = [...list];
      const index = updated.findIndex((task) => task.id === event.id);

      if (index !== -1) {
        updated[index] = {
          ...updated[index],
          status: event.status,
        };
      }

      return updated;
    });
  }

  generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }
}
