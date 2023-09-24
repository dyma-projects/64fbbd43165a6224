import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('content') contentElement: ElementRef;
  public valeur: string;

  constructor() { }

  ngOnInit() {
    this.valeur = this.contentElement.nativeElement.innerText;
  }

}
