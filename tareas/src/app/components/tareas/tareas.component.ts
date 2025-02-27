import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas.interface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  public tareas:Tarea[] = [];
  public nombreTarea:string = '';
  public iconTrash = faTrash;
  public iconoCirculo = faCircle;
  public idNumero:number = 1;


  agregarTarea = ():void => {
    if(!this.nombreTarea) return;

    const objTarea:Tarea = {
      id: this.idNumero++,
      nombre:this.nombreTarea,
      estado: false
    }
    this.tareas = [...this.tareas, objTarea];
    console.log(this.tareas);
    this.nombreTarea = '';

  }

  eliminarTarea = (id:number): void => {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  completarTarea = (id:number): void => {



  }

}
