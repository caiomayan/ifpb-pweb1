import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './task.model';

export interface TaskFormValue {
  title: string;
  due: string;
  level: Task['level'];
  desc: string;
}

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnChanges {
  task = input<Task | null>(null);

  save = output<TaskFormValue>();
  cancel = output<void>();

  title = '';
  due = '';
  level: Task['level'] = 'low';
  desc = '';

  ngOnChanges(_: SimpleChanges): void {
    const currentTask = this.task();

    if (!currentTask) {
      this.reset();
      return;
    }

    this.title = currentTask.title;
    this.due = currentTask.due;
    this.level = currentTask.level;
    this.desc = currentTask.desc;
  }

  onSubmit(): void {
    if (!this.title.trim() || !this.due) return;

    this.save.emit({
      title: this.title.trim(),
      due: this.due,
      level: this.level,
      desc: this.desc.trim(),
    });
    this.reset();
  }

  onCancel(): void {
    this.reset();
    this.cancel.emit();
  }

  private reset(): void {
    this.title = '';
    this.due = '';
    this.level = 'low';
    this.desc = '';
  }
}
