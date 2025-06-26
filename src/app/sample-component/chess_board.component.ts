import { Component } from '@angular/core';
import { ChessBoard } from '../chess-logic/chess-board';
import { Color, FENChar } from '../chess-logic/models';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess_board.component.html',
  styleUrl: './chess_board.component.css'
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar|null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color { return this.chessBoard.playerColor; };
}
