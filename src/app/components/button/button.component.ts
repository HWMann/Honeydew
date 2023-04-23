import {Component, Input, OnInit} from '@angular/core';
import {MqttService} from "ngx-mqtt";
import {WidgetModel} from "../../models/widget.model";
import {ActionModel} from "../../models/action.model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public widget: WidgetModel = new WidgetModel()

  constructor(
    private mqttService: MqttService
  ) {
  }

  ngOnInit() {
  }

  andAction() {
    this.widget.actions.forEach((action: ActionModel) => {
      let topic = action?.actor?.topic
      let payload = action?.port?.payload

      if(topic && payload) {
        this.mqttService.unsafePublish(topic,payload);
      }
      console.log(action)
    })
  }

}
