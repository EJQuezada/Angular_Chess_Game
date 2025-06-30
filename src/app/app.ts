import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: '../app/modules/chess_board/chess_board.component.html',
  styleUrl: '../app/modules/chess_board/chess_board.component.css'
})
export class App {
  protected title = 'chess-game';
}
