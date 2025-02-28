import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tareas.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas:Tarea[] = [];
  public idNumero:number = 1;
  constructor() { }



  agregarTarea = (nombreTarea:string):void => {
    const objTarea:Tarea = {
      id: this.idNumero++,
      nombre:nombreTarea,
      estado: false
    }
    this.tareas = [...this.tareas, objTarea];
  }

  eliminarTarea = (id:number):void => {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  complementarTarea = (id:number):void => {
    this.tareas = this.tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, estado: true } : tarea
    );
    this.agregarALocalStorage(this.tareas);
  }


  obtenerTareas = ():Tarea[] => {
    return this.tareas;
  }

  agregarALocalStorage = (tarea:Tarea[]):void => {
    localStorage.setItem('tareas', JSON.stringify(tarea));
  }




}
