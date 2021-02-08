import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from './views/map/map.component';
import {SwitchMapComponent} from './views/switch-map/switch-map.component';
import {PipesComponent} from './views/pipes/pipes.component';
import {ObservablesComponent} from './views/observables/observables.component';
import {IndexComponent} from './views/index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      previous: null,
      next: {
        path: 'observable',
        displayName: 'Observables'
      }
    }
  },
  {
    path: 'observable',
    component: ObservablesComponent,
    data: {
      previous: {
        path: '',
        displayName: 'Index'
      },
      next: {
        path: 'pipe',
        displayName: 'Pipes'
      }
    }
  },
  {
    path: 'pipe',
    component: PipesComponent,
    data: {
      previous: {
        path: 'observable',
        displayName: 'Observables'
      },
      next: {
        path: 'map',
        displayName: 'Map'
      }
    }
  },
  {
    path: 'map',
    component: MapComponent,
    data: {
      previous: {
        path: 'pipe',
        displayName: 'Pipes'
      },
      next: {
        path: 'switch-map',
        displayName: 'Switch Map'
      }
    }
  },
  {
    path: 'switch-map',
    component: SwitchMapComponent,
    data: {
      previous: {
        path: 'map',
        displayName: 'Map'
      },
      next: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
