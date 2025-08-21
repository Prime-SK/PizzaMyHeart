import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// Devtools are helpful during development but we're disabling them temporarily.
// To re-enable, uncomment the imports below.
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
  {/* Devtools disabled - uncomment to enable during development */}
  { /* <TanStackRouterDevtools /> */ }
  { /* <ReactQueryDevtools /> */ }
      </>
    );
  },
});
