import { Component, OnInit } from '@angular/core';
import { DATA } from '../assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-universal-example';

  public localData;
  constructor() { }

  ngOnInit() {
    this.localData = DATA;
  }
}
