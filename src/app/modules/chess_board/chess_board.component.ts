import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChessBoard } from '../../chess-logic/chess-board';
import { Color, FENChar } from '../../chess-logic/models';

@Component({
  selector: 'app-chess_board',
  templateUrl: './chess_board.component.html',
  styleUrls: ['./chess_board.component.css']
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar|null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color { return this.chessBoard.playerColor; }
}
