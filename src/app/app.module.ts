import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardColorProviderService } from './services/card-colour-provider.service';
import { HeaderComponent } from './header/header.component';
import { GameOrchestrationService } from './services/game-orchestration.service';
import { ScoreComponent } from './score/score.component';
import { FinalScoreModalComponent } from './score/final-score-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    ScoreComponent,
    FinalScoreModalComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    CardColorProviderService,
    GameOrchestrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
