import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './views/map/map.component';
import { SwitchMapComponent } from './views/switch-map/switch-map.component';
import { PipesComponent } from './views/pipes/pipes.component';
import { ObservablesComponent } from './views/observables/observables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './views/index/index.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SwitchMapComponent,
    PipesComponent,
    ObservablesComponent,
    IndexComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
