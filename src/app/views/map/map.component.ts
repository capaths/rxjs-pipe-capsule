import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ObservablesGeneratorService} from '../../services/observables-generator.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  counter$: Observable<number>;
  counterPlus1$: Observable<number>;
  counterBy2$: Observable<number>;
  counterLetters$: Observable<string>;
  counterTime$: Observable<string>;


  constructor(generator: ObservablesGeneratorService) {
    this.counter$ = generator.countEvery(1000);
    this.counterPlus1$ = this.counter$.pipe(
      map(value => value + 1)
    );
    this.counterBy2$ = this.counter$.pipe(
      map(value => value * 2)
    );
    this.counterLetters$ = this.counter$.pipe(
      map(value => 'a'.repeat(value))
    );
    this.counterTime$ = this.counter$.pipe(
      map(value => {
        const minutes = Math.floor(value / 60);
        const seconds = value % 60;
        return `${minutes}:${seconds}`;
      })
    );
  }

  ngOnInit(): void {
  }

}
