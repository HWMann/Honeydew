import {Component, Input, OnInit} from '@angular/core';
import {WidgetModel} from "../../models/widget.model";
import {ActionModel} from "../../models/action.model";
import {MqttService} from "ngx-mqtt";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit{
  @Input() widget:WidgetModel = new WidgetModel();
  public startCol:number = 0
  public startRow:number = 0
  public endCol:number = 0
  public endRow:number = 0

  constructor(
    private mqttService: MqttService
  ) {}

  ngOnInit(): void {
    console.log(this.widget);
  }

  clickWidget():void {
    this.widget.actions.forEach((action:ActionModel) => {
      let topic = action?.actor?.topic
      let payload = action?.port?.payload
      if(payload===undefined) payload=null
      if(topic && payload===null) {
        this.mqttService.publish(topic,"").subscribe();
      }
      if(topic && payload!==null) {
        this.mqttService.publish(topic,payload).subscribe();
      }
    })
  }
}
