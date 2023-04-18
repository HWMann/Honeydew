import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ScreenModel} from "../../models/screen.model";
import {Subscription} from "rxjs";
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public screens:ScreenModel[] = []
  private subs:Subscription[] = []

  constructor(
    private api:ApiService,
    private mqtt:Mqtt
  ) {
  }

  ngOnInit() {
    this.loadScreens();
    this.subs=[
      this.mqtt.subscribe("Honeydew/reload").subscribe((data:any)=>{
        this.loadScreens()
      })
    ]
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs=[]
  }

  loadScreens():void {
    this.api.get("/screens").subscribe((screens:ScreenModel[]) => {
      this.screens=screens
    })
  }
}
