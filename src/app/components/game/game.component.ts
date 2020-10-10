import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  title = 'slidingGame';

  constructor(private toastr: ToastrService) { }

  swapTiles(cell1, cell2) {
    let temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(
      cell2
    ).className;
    document.getElementById(cell2).className = temp;
  }

  shuffle() {
    //access each cell of the 4x4 grid
    for (let row = 1; row <= 4; row++) {
      //For each row of the 4x4 grid
      for (let column = 1; column <= 4; column++) {
        //Pick a random row from 1 to 4
        let row2 = Math.floor(Math.random() * 4 + 1);
        //Pick a random column from 1 to 4
        let column2 = Math.floor(Math.random() * 4 + 1);

        this.swapTiles('cell' + row + column, 'cell' + row2 + column2);
      }
    }
  }


  won() {
    let order = [];
    for (let row = 1; row <= 4; row++) {
      //For each row of the 4x4 grid
      for (let column = 1; column <= 4; column++) {
        //For each column in this row

        let x = document.getElementById('cell' + row + column).className;

        order.push(parseInt(x.substr(4, x.length)));
      }
    }

    for (let i = 0; i < order.length - 1; i++) {
      if (order[i] > order[i + 1]) {
        return false;
      }
    }
    return true;
  }



  selectTile(row, column) {
    let cell = document.getElementById('cell' + row + column);
    let tile = cell.className;
    if (tile != 'tile16') {
      //Checking if white tile on the right
      if (column < 4) {
        if (
          document.getElementById('cell' + row + (column + 1)).className ==
          'tile16'
        ) {
          this.swapTiles('cell' + row + column, 'cell' + row + (column + 1));
        }
      }
      //Checking if white tile on the left
      if (column > 1) {
        if (
          document.getElementById('cell' + row + (column - 1)).className ==
          'tile16'
        ) {
          this.swapTiles('cell' + row + column, 'cell' + row + (column - 1));
        }
      }
      //Checking if white tile is above
      if (row > 1) {
        if (
          document.getElementById('cell' + (row - 1) + column).className ==
          'tile16'
        ) {
          this.swapTiles('cell' + row + column, 'cell' + (row - 1) + column);
        }
      }
      //Checking if white tile is below
      if (row < 4) {
        if (
          document.getElementById('cell' + (row + 1) + column).className ==
          'tile16'
        ) {
          this.swapTiles('cell' + row + column, 'cell' + (row + 1) + column);
        }
      }

      //Checking if user wins the game
      if (this.won()) {
        alert('Congratulations -- Winner!!! :) ');
        // this.toastr.success('Hello world!', 'Toastr fun!');
      }
    }
  }

  ngOnInit(): void {
    this.shuffle();
  }

}
