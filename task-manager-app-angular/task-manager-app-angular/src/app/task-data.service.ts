import { Injectable } from '@angular/core';
import { Task } from './task.model';

function addDaysISO(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

export const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Ler capitulo 3 de Algoritmos',
    due: addDaysISO(2),
    level: 'high',
    desc: 'Priorizar exercicios 3.1-3.5',
    status: 'todo',
  },
  {
    id: '2',
    title: 'Resolver lista de TS',
    due: addDaysISO(5),
    level: 'medium',
    desc: 'Atencao a generics',
    status: 'doing',
  },
  {
    id: '3',
    title: 'Revisao rapida HTML/CSS',
    due: addDaysISO(10),
    level: 'low',
    desc: '30 minutos',
    status: 'done',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  getInitialTasks(): Task[] {
    return [...INITIAL_TASKS];
  }
}
