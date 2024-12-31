import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  name: WritableSignal<string> = signal('Miguel')
  disabled: boolean = true
  person = {
    nombre: 'Juan',
    edad: 22
  }

  tasks = signal([
    { name: 'Tarea 1', done: false },
    { name: 'Tarea 2', done: true },
    { name: 'Tarea 3', done: false }
  ])

  changeHandler(event: Event) {
    console.log(event)
  }

  keyupHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    this.name.set(input.value)
  }

  clickHandler() {
    alert('Hola')
  }
}
