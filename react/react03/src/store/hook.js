import { ProviderContext } from "./Provider";
import { useContext, useReducer } from "react";
import { inittialState } from "./reducer";

export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};

export const useSelector = (callback) => {
  if (typeof callback !== "function") {
    throw new Error(`Selector must be function`);
  }
  const { state } = useContext(ProviderContext);
  return callback(state);
};

export const useReducerMiddleware = (reducer, inittialState, middleware) => {
  //middleware is a function
  const [state, dispatch] = useReducer(reducer, inittialState);
  const dispatchMiddleware = (action) => {
    const store = {
      getState: () => state,
      dispatch,
    };
    if (typeof middleware === "function") {
      const middlewareFunc = middleware(store);
      if (typeof middlewareFunc !== "function") {
        throw new Error("Syntax Error");
      }
      middlewareFunc(action);
    }
    dispatch(action);
  };
  return [state, dispatchMiddleware];
};
