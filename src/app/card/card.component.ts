import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameOrchestrationService } from '../services/game-orchestration.service';

export type ICard = {
  id: number;
  color: string;
  isActiveEvent: EventEmitter<ICard>;
  isDisabled: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, ICard {
  public isActive: boolean = false;

  @Input()
  public id: number;
  @Input()
  public color: string;
  @Input()
  public isDisabled: boolean = false;
  @Output() 
  isActiveEvent = new EventEmitter<ICard>();

  constructor(private service: GameOrchestrationService) { 
    service.register(this);
    service.deActivateCard.subscribe(() => {
      this.isActive = false;
    });
  }

  ngOnInit() {
    console.log(this.color);
  }

  onClick() {
    if (this.service.isAllowedToFlip && this.isActive === false) {
      this.isActive = !this.isActive;
      this.isActiveEvent.emit(this);
    }
  }
}
