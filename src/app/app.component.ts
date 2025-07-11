import { Component, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chess-board',
  imports: [RouterOutlet, CommonModule, BrowserModule, NgFor],
   styleUrls: ['./app.component.css']
})
export class ChessBoardComponent {
  title = 'chess-game';
} 
