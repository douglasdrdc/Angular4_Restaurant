import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1,2,3,4,5];
  rate: number = 0;
  previusRate: number = 0;

  constructor() { }

  ngOnInit() {
  }

  setRate(rateNumber: number) {
    this.rate = rateNumber;
    this.previusRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(rateNumber: number) {
    if (this.previusRate === undefined) {
      this.previusRate = this.rate;
    }
    this.rate = rateNumber;
  }

  clearTemporaryReate() {
    if (this.previusRate !== undefined) {
      this.rate = this.previusRate;
      this.previusRate = undefined;
    }
  }

}
