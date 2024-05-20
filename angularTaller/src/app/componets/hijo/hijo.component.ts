import { ResourceLoader } from '@angular/compiler';
import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output() resultadoHijo: EventEmitter<number> = new EventEmitter<number>();
  resultado: number=0;

  sumarClick(){
    this.resultado = this.resultado + 1;
    this.resultadoHijo.emit(this.resultado);
  }
  restarClick(){
    this.resultado = this.resultado - 1;
    this.resultadoHijo.emit(this.resultado);
  }
  resetClick(){
    this.resultado = 0;
    this.resultadoHijo.emit(this.resultado);
  }
}
