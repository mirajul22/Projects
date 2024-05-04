// import axios from "axios";
// import { createContext, useContext, useEffect, useReducer } from "react";
// import reducer from "../reducer/ProductReducer.jsx";

// const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";
// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProduct: [],
// };
// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const GetProducts = async (url) => {
//     dispatch({ type: "LOADING_PRODUCTS" });
//     try {
//       const res = await axios.get(url);
//       const products = await res.data;
//       dispatch({ type: "SET_API_DATA", payload: products });
//       // console.log(products);
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };
//   useEffect(() => {
//     GetProducts(API);
//   }, []);
//   return (
//     <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
//   );
// };

// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };
