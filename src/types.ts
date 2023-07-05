export enum GameState {
  Stopped = 0,
  Started = 1,
  Paused = 2,
}

export type State = {
  gameState: GameState | string;
};
