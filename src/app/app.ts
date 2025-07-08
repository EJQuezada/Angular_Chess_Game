import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: '../app/modules/chess-board/chess-board.component.html',
  styleUrl: '../app/modules/chess-board/chess-board.component.css'
})
export class App {
  protected title = 'chess-game';
}
