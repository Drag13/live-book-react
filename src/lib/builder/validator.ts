import { Scene } from "./types";

export function validateModuleScheme(
  initialScene: Scene<any>,
  scenes: Scene<any>[]
) {
  const allScenes = [initialScene, ...scenes];
  const allOptions = allScenes.map((x) => Object.values(x.options)).flat();

  const unreachableScenes = scenes.filter((scene) =>
    allOptions.every((opt) => opt.nextSceneId !== scene.id)
  );

  const optionWithoutScenes = allOptions.filter((opt) =>
    allScenes.every((scene) => scene.id !== opt.nextSceneId)
  );

  return {
    valid: !unreachableScenes.length && !optionWithoutScenes.length,
    unreachableScenes,
    optionWithoutScenes,
  };
}
