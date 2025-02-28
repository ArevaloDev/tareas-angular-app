import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interfaces/tareas.interface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { TareasService } from '../../services/tareas.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {
  public tareas:Tarea[] = [];
  public tareasFinalizadas:Tarea[] = [];
  public nombreTarea:string = '';
  public iconTrash = faTrash;
  public iconoCirculo = faCircle;
  public iconoCheck = faCircleCheck;
  public idNumero:number = 1;


  constructor(private tareaService:TareasService){}



  ngOnInit(): void {
    //const data = localStorage.getItem('tareas')!;
    //this.tareas = data ? JSON.parse(data) : [];

    this.tareas = this.tareaService.obtenerTareas();


  }
  agregarTarea = ():void => {
    if(!this.nombreTarea) return;
    this.tareaService.agregarTarea(this.nombreTarea);
    this.nombreTarea = '';
    this.agregarLocalStorage(this.tareas);
    this.tareas= this.tareaService.obtenerTareas();
    console.log(this.tareas);

  }

  eliminarTarea = (id:number): void => {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.agregarLocalStorage(this.tareas);
  }

  completarTarea = (id:number) : void => {
     this.tareas = this.tareas.map(tarea =>
      tarea.id === id ? {...tarea, estado:true} : tarea
    )
    console.log(this.tareasFinalizadas);

    this.agregarLocalStorage(this.tareas);
  }

  agregarLocalStorage = (tarea?:Tarea[]):void => {
    localStorage.setItem('tareas', JSON.stringify(tarea))
  }

}
