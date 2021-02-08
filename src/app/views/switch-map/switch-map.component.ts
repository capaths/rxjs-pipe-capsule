import { Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ObservablesGeneratorService} from '../../services/observables-generator.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {
  params$: Observable<object>;
  routeCounter$: Observable<number>;
  referenceCounter$: Observable<number>;
  routeCounterPlus2$: Observable<number>;

  constructor(
    route: ActivatedRoute,
    generator: ObservablesGeneratorService,
    ) {
    this.params$ = route.params;

    this.routeCounter$ = route.params.pipe(
      switchMap(params => {
        return generator.countEvery(+params.num * 1000);
      })
    );

    this.referenceCounter$ = generator.countEvery(1000).pipe(
      map(value => value + 1)
    );

    this.routeCounterPlus2$ = route.params.pipe(
      map(params => +params.num + 2),
      switchMap(value => generator.countEvery(value * 1000))
    );
  }
}
