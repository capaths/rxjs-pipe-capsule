import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ObservablesGeneratorService} from '../../services/observables-generator.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  counter$: Observable<number>;

  constructor(generator: ObservablesGeneratorService) {
    this.counter$ = generator.countEvery(1000);
  }

  ngOnInit(): void {
  }

}
