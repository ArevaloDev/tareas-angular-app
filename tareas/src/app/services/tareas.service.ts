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


  obtenerTareas = ():Tarea[] => {
    return this.tareas;
  }




}
