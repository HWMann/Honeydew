import {ActorModel} from "./actor.model";
import {WidgetModel} from "./widget.model";
import {PortModel} from "./port.model";

export class ActionModel {
  public id:number = 0
  public widget:WidgetModel|null = null
  public actor:ActorModel|null = null
  public port:PortModel|null = null
}
