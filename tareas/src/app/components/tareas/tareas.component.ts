import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  public tareas:Tarea[] = [];
  public nombreTarea:string = '';


  agregarTarea = ():void => {
    const objTarea:Tarea = {
      nombre:this.nombreTarea,
      estado: false
    }

    this.tareas = [...this.tareas, objTarea];

    console.log(this.tareas);
    this.nombreTarea = '';

  }

}
