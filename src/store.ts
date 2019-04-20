import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

export interface StoreState {
  isSidebarVisible: boolean;
}

// Actions
export const TODO_ACTION = 'TODO_ACTION';
export type TODO_ACTION = typeof TODO_ACTION;
export interface TodoAction {
  type: TODO_ACTION;
}
export const todoAction = () => ({ type: TODO_ACTION });

// Reducer
export const reducer = (state: StoreState, action: TodoAction): StoreState => {
  switch (action.type) {
    // TODO: Add reducer
    case TODO_ACTION:
      return Object.assign({}, state, { key: 'value' });
    default:
      return state;
  }
};

// Store
export const initialState: StoreState = { isSidebarVisible: false };
export const store = createStore<StoreState>(
  reducer,
  initialState,
  devToolsEnhancer({}),
);
