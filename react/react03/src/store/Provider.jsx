import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { inittialState, reducer } from "./reducer";
import { useReducerMiddleware } from "./hook";
import { middleware } from "./middleware";
//Component này sẽ chứa global state và các logic truyền dữ liệu xuống component của toàn bộ dự án
export const ProviderContext = createContext();
export default function Provider({ children }) {
  // Tạo state ở đây và truyền xuống children
  const [state, dispatch] = useReducerMiddleware(
    reducer,
    inittialState,
    middleware
  );
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}

export function useProviderContext() {
  return useContext(ProviderContext);
}
Provider.propTypes = {
  children: PropTypes.node,
};
