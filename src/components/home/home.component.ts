import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterComponentComponent } from '../character-component/character-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterComponentComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
