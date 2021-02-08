import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ActivatedRoute, Data, NavigationEnd, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {faArrowAltCircleLeft, faArrowAltCircleRight, faHome} from '@fortawesome/free-solid-svg-icons';


interface RouteDisplay {
  path: string;
  displayName: string;
}

interface PreviousNextData {
  page: number;
  previous: RouteDisplay | null;
  next: RouteDisplay | null;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  previousIcon = faArrowAltCircleLeft;
  homeIcon = faHome;
  nextIcon = faArrowAltCircleRight;

  routeData$?: Observable<PreviousNextData>;

  constructor(private router: Router, private route: ActivatedRoute) {
    // you can ignore this
    this.routeData$ = router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        switchMap(() => {
          const data: PreviousNextData = {
            previous: null,
            next: null,
            page: 0
          };
          return route.firstChild ? route.firstChild.data : of(data);
        }),
        map((x: Data) => {
          console.log(x);
          return x as PreviousNextData;
        })
      );
  }
}
