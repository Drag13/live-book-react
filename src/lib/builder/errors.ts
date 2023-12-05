export class DuplicateSceneIdError extends Error {
  constructor(sceneId: string) {
    super(`Scene ${sceneId} already exists`);
  }
}
