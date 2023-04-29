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
  public currentScreen:number = 0

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

  onSwipeLeft($event:any):void {
    this.currentScreen--;
    if(this.currentScreen<0) this.currentScreen=0
    console.log(this.currentScreen)
  }

  onSwipeRight($event:any):void {
    this.currentScreen++;
    if(this.currentScreen>this.screens.length-1) this.currentScreen=2
    console.log(this.currentScreen)
  }

}
