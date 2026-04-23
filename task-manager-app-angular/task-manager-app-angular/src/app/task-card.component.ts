import { Component, input, output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.component.html',
})
export class TaskCardComponent {
  task = input.required<Task>();
  deleteTask = output<string>();
  editTask = output<Task>();

  onDragStart(event: DragEvent): void {
    event.dataTransfer?.setData('text/plain', this.task().id);
  }

  onDelete(): void {
    this.deleteTask.emit(this.task().id);
  }

  onEdit(): void {
    this.editTask.emit(this.task());
  }

  proximityColor(dueISO: string): string {
    const today = new Date();
    const due = new Date(dueISO);
    const diff = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diff < 0) return 'bg-gray-500';
    if (diff <= 1) return 'bg-red-500';
    if (diff <= 3) return 'bg-orange-400';
    if (diff <= 7) return 'bg-yellow-300';
    return 'bg-green-400';
  }

  levelLabel(level: Task['level']): string {
    if (level === 'high') return 'Alta';
    if (level === 'medium') return 'Media';
    return 'Baixa';
  }
}
