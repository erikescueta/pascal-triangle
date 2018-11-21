import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pascal',
  templateUrl: './pascal.component.html',
  styleUrls: ['./pascal.component.sass'],
  providers: [ FormsModule ]
})
export class PascalComponent implements OnInit {

  public rowNum;
  public invalidRowInput = false;
  public pascalArray = [];

  constructor() { }

  ngOnInit() {
  }

  validateRowInput() {
    if (this.rowNum <= 0 || this.rowNum === undefined || this.rowNum === null) {
      this.invalidRowInput = true;
    } else {
      this.invalidRowInput = false;
    }
  }

  generatePascal() {
    event.preventDefault();
    this.validateRowInput();

    if (!this.invalidRowInput) {
      /* Empty the Pascal array model */
      this.pascalArray.splice(0, this.pascalArray.length);

      /* Construct our array placeholder for previous rows */
      const previousArray = [];

      /* Run the for loop based on the number of rows */
      for (let row = 0; row < this.rowNum; row++) {

        /* First row */
        if (row === 0) {
          /* Push the current row values to the Pascal array model */
          this.pascalArray.push([1]);
        }

        /* Second row and higher */
        if (row > 0) {

          /* Array placeholder for the current row being generated */
          const computedArray = [];

          /* First column is always 1 */
          computedArray.push(1);

          /* Compute in-between columns using previous column values */
          for (let i = 0; i < previousArray.length - 1; i++) {
            const firstElem = previousArray[i] || 0;
            const lastElem = previousArray[i + 1] || 0;
            computedArray.push(firstElem + lastElem);
          }

          /* Last column is always 1 */
          computedArray.push(1);

          /* Push the current row values to the Pascal array model */
          this.pascalArray.push(computedArray);

          /* Prepare for computing the next row values in primary for loop */
          previousArray.splice(0, previousArray.length, ...computedArray);
        }
      }
    }
  }
}
