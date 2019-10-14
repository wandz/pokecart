import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'poke-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() adopted = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  adopt() {
    this.adopted.emit();
  }

}
