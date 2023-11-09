import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const TotalPriceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
};

export function TotalPriceProvider({ children }) {
  TotalPriceProvider.propTypes = {
    children: PropTypes.object,
  };

  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

export function UseTotalPrice() {
  return useContext(TotalPriceContext);
}

export function UseTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
