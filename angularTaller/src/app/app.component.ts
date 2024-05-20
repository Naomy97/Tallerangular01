import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './componets/hijo/hijo.component';
import { PadreComponent } from './componets/padre/padre.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HijoComponent, PadreComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularTaller';
}
