import { computed, reactive } from "vue";
import { State, GameState } from "../types";

const defaultState: State = {
  gameState: GameState.Stopped,
};

const store = {
  state: reactive({}),
  getters: {
    gameState: computed(() => store.state.gameState),
  },

  actions: {
    emptyAction: (): void => {
      if (store.state.gameState === GameState.Started) {
      }
    },
  },
};

export default store;
