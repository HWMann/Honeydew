import {ActionModel} from "./action.model";
import {ActorModel} from "./actor.model";
import {ScreenModel} from "./screen.model";

export class WidgetModel {
  public id: number = 0
  public name: string | null = null
  public screen: ScreenModel | null = null
  public visible: boolean = false
  public type: string | null = null
  public statusActor:ActorModel | null = null
  public actions: ActionModel[] = []
  public cssGridCoords: string = ""
}
