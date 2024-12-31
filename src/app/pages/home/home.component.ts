import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      title: 'Aprender Angular',
      completed: false,
      id: Date.now(),
    },
    {
      title: 'Aprender Angular CLI',
      completed: false,
      id: Date.now(),
    },
    {
      title: 'Criar novo projeto',
      completed: false,
      id: Date.now(),
    },
    // 'Instalar Angular',
    // 'Instalar Angular CLI',
    // 'Crear novo projeto',
  ])

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement
    const taskTitle = input.value
    this.addTask(taskTitle)
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }
    this.tasks.update(tasks => [...tasks, newTask])
  }

  deleteTask(index: number) {
    this.tasks.update(tasks => tasks.filter((_, i) => i !== index))
  }

  toggleTask(index: number) {
    console.log('here')
    this.tasks.update(tasks => (
      tasks.map((task, _index) => index === _index 
        ? {
          ...task,
          completed: !task.completed
        }
        : task)
    ))
  }
}
