import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() counter:number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter);
    console.log('increment',this.counter);
    
  }

  decrement(){
    this.counter--;
    this.counterChange.emit(this.counter);
    console.log('decrement',this.counter);
    
  }

}
