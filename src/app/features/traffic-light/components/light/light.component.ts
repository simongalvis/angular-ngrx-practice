import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLightColor } from '../../state';
import * as actions from '../../state/actions/light.actions';
@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css'],
})
export class LightComponent implements OnInit {
  color$!: Observable<string>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.color$ = this.store.select(selectLightColor);
  }

  cycle() {
    this.store.dispatch(actions.lightCycled());
  }
}
