import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainBotComponent } from './train-bot/train-bot.component';
import { IntentsComponent } from './intents/intents.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CatchAllComponent } from './catch-all/catch-all.component';

const routes: Routes = [
  { path: "", redirectTo: "train-bot", pathMatch: "full" },
  { path: "train-bot", component: TrainBotComponent },
  { path: "intents", component: IntentsComponent },
  { path: "catch-all", component: CatchAllComponent },
  { path: "analytics", component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
