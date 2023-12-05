import { applyAction, isConditionMet } from './helpers';
import { Module, Scene, State } from '../builder/types';

export class BookRunner<T extends string> {
  private readonly _module: Module<T>;
  private _currentScene: Scene<T>;
  private _state: State<T>;

  get sceneDescription() {
    return this._currentScene.description;
  }

  get choices() {
    const allChoices = Object.values(this._currentScene.options);
    return allChoices.filter((x) => !isConditionMet(this._state, x.hidden));
  }

  get state() {
    return this._state;
  }

  get moduleId() {
    return this._module.id;
  }

  constructor(module: Module<T>) {
    this._module = module;
    this._currentScene = module.startScene;
    this._state = module.state;
  }

  act(choiceId: string) {
    const selectedChoice = this._currentScene.options[choiceId];
    if (selectedChoice == null) {
      throw new Error(`Choice with choiceId ${choiceId} not found`);
    }

    const shouldBeHidden = isConditionMet(this._state, selectedChoice.hidden);

    if (shouldBeHidden) {
      throw new Error(`Choice with choiceId ${choiceId} should be hidden`);
    }

    if (!selectedChoice.actions) {
      this._currentScene = this._module.scenes[selectedChoice.nextSceneId];
      return;
    }

    const newState = applyAction(this._state, selectedChoice.actions);
    const conditionalScheme = this._module.defaultScenes.find((scene) =>
      isConditionMet(newState, scene.condition)
    );

    this._currentScene =
      conditionalScheme?.scene ??
      this._module.scenes[selectedChoice.nextSceneId];
  }
}
