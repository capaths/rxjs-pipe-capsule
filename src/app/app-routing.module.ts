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
      page: 0,
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
      page: 1,
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
      page: 2,
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
      page: 3,
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
      page: 4,
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
