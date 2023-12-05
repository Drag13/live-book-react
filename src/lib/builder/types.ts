export type Module<Features extends string> = {
  id: string;
  name: string;
  startScene: Scene<Features>;
  scenes: Record<string, Scene<Features>>;
  state: State<Features>;
  defaultScenes: DefaultScene<Features>[];
};

export type DefaultScene<TFeature> = {
  scene: Scene<TFeature>;
  condition: Condition<TFeature>;
};

export type Scene<Target> = {
  id: string;
  description: string;
  options: Record<string, Option<Target>>;
};

export type Option<Target> = {
  id: string;
  nextSceneId: string;
  description: string;
  actions?: Action<Target>[];
  hidden?: Condition<Target>;
};

export type Condition<Target> = {
  target: Target;
  operator: 'eq' | 'gt' | 'lt' | 'neq';
  value: number;
};

export type ComplexCondition<Target> = [
  Condition<Target> | ComplexCondition<Target>,
  LogicOperator,
  Condition<Target> | ComplexCondition<Target>
];

export type LogicOperator = 'and' | 'or';

export type Action<Target> = {
  operator: 'increment' | 'decrement' | 'set';
  target: Target;
  value: number;
};

export type State<Target extends string> = Record<Target, number>;
