import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getProducts as getProductsFromAPI } from "./ProductsData";
import {
  IProductsGetAllAction,
  IProductsLoadingAction,
  IProductsState,
  ProductsActionTypes
} from "./ProductsTypes";

const loading: ActionCreator<IProductsLoadingAction> = () => ({
  type: ProductsActionTypes.LOADING
});

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>> = () => {};
