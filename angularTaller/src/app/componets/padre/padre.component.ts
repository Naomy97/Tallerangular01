import { Component, input } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

 resultadoDoble: number = 0;

 resultadoD(resultadoDoble2: number){
  this.resultadoDoble = resultadoDoble2 * 2;
 }
}

