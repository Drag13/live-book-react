import { Action, Condition } from '../builder/types';

export function isConditionMet(
  state: Record<string, number>,
  condition: Condition<string> | undefined
): boolean {
  if (condition == null) {
    return false;
  }

  const targetValue = state[condition.target];
  const value = condition.value;

  switch (condition.operator) {
    case 'eq':
      return targetValue === value;
    case 'gt':
      return targetValue > value;
    case 'lt':
      return targetValue < value;
    case 'neq':
      return targetValue !== value;
  }
}

export function applyAction(
  state: Record<string, number>,
  actions: Action<string>[]
) {
  for (const action of actions) {
    if (action.operator === 'increment') {
      state[action.target] += action.value;
      continue;
    }

    if (action.operator === 'set') {
      state[action.target] = action.value;
      continue;
    }

    if (action.operator === 'decrement') {
      state[action.target] -= action.value;
      continue;
    }
  }

  return { ...state };
}
