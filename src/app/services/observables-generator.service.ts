import { Injectable } from '@angular/core';
import {interval, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesGeneratorService {

  constructor() { }

  repeatEvery(ms: number): Observable<number> {
    return interval(ms);
  }
}
