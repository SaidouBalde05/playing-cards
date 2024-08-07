import { Component, Input, InputSignal, input } from '@angular/core';
import { Monster } from '../../models/monster.models';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss',
})
export class PlayingCardComponent {
  monster: InputSignal<Monster> = input(new Monster());
}
