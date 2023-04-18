import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConfigService} from "./services/config.service";
import {Subscription} from "rxjs";
import {Mqtt} from "./services/mqtt.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private configService:ConfigService,

  ) {
  }
  ngOnInit() {

  }


}
