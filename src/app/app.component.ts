import { Component, OnInit } from '@angular/core';
import { CardColorProviderService } from './services/card-colour-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Colour Memory';
  colors: string[] = [];

  constructor(private cardProvider: CardColorProviderService) {
  }

  ngOnInit(): void {
    this.colors = this.cardProvider.getCardColorSet();    
  }  
}
