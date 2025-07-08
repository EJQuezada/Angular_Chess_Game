import { Component, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BrowserModule, NgFor],
   templateUrl: './chess-board.component.html',
  styleUrls: ['./app.component.css']
})
export class ChessBoardComponent {
  title = 'chess-game';
} 
