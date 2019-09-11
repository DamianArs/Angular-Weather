import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OneDayComponent } from "./one-day/one-day.component";
import { ForecastComponent } from "./forecast/forecast.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/oneDay",
    pathMatch: "full"
  },
  {
    path: "oneDay",
    component: OneDayComponent
  },
  {
    path: "forecast",
    component: ForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
