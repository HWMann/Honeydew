import {ActorModel} from "./actor.model";
import {ActionModel} from "./action.model";

export class WidgetModel {
  id: number = 0
  name: string | null = null
  actions: ActionModel[] = []
  visible: boolean = false
}
