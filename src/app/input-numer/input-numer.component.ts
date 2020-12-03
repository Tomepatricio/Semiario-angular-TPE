import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-numer",
  templateUrl: "./input-numer.component.html",
  styleUrls: ["./input-numer.component.css"]
})
export class InputNumerComponent implements OnInit {
  constructor() {}

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  increaseQuantity() {
    if (this.max > this.quantity) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else this.maxReached.emit("No queda mas Stock");
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event) {
    console.log(event);
    this.quantityChange.emit(this.quantity);
  }
}
