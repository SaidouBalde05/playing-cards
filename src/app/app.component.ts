import { Component } from '@angular/core';
import { PlayingCardComponent } from './component/playing-card/playing-card.component';
import { Monster } from './models/monster.models';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  monster1!: Monster;
  count: number = 0;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.hp = 43 + 7;
    this.monster1.figureCaption = 'N 002 Pik';
    this.monster1.attackStreamgth = 55;
    this.monster1.attackName = 'deuxieme';
    this.monster1.attackDescription = 'la deuxieme description ...  ';
  }
}
