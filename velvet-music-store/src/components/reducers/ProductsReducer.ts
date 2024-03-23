import {
  CHANGE_CATEGORY,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_FILTERED_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  RESET_FILTERS,
  TOGGLE_SIDENAV
} from '../../constants/ReducerActions/productsActions';
import {
  Filters,
  Product,
  ProductsState
} from '../contexts/products-context/products-context';

type GetProductsBeginAction = {
  type: 'GET_PRODUCTS_BEGIN';
};

type ProductsSuccessAction = {
  type: 'GET_ALL_PRODUCTS_SUCCESS';
  payload: {
    products: Product[];
    num_products: number;
  };
};

type GetProductsErrorAction = {
  type: 'GET_PRODUCTS_ERROR';
};

type GetSingleProductBegin = {
  type: 'GET_SINGLE_PRODUCT_BEGIN';
};

type GetFilteredProductsSuccessAction = {
  type: 'GET_FILTERED_PRODUCTS_SUCCESS';
  payload: {
    filter_products: Product[];
    filters_state: Filters | undefined;
    sort_state: string | undefined;
  };
};

type GetSingleProductSuccessAction = {
  type: 'GET_SINGLE_PRODUCT_SUCCESS';
  payload: {
    product: Product;
  };
};

type ResetFiltersAction = {
  type: 'RESET_FILTERS';
};

type ChangeCategoryAction = {
  type: 'CHANGE_CATEGORY';
  payload: {
    category: string;
  };
};

type ToggleSidenav = {
  type: 'TOGGLE_SIDENAV';
};

type Action =
  | GetProductsBeginAction
  | ProductsSuccessAction
  | GetProductsErrorAction
  | GetFilteredProductsSuccessAction
  | GetSingleProductSuccessAction
  | ResetFiltersAction
  | ChangeCategoryAction
  | ToggleSidenav
  | GetSingleProductBegin;

export default function ProductsReducer(
  state: ProductsState,
  action: Action
): ProductsState {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_ALL_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products_loading: false,
      products: action.payload.products,
      original_products: action.payload.products,
      num_products: action.payload.num_products
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_error: true, products_loading: false };
  }

  if (action.type === GET_FILTERED_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload.filter_products,
      filters_state: action.payload.filters_state || { brands: [], sales: [] },
      sort_state: action.payload.sort_state || ''
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload.product
    };
  }

  if (action.type === RESET_FILTERS) {
    return {
      ...state,
      filters_state: {
        brands: [],
        sales: []
      },
      sort_state: ''
    };
  }

  if (action.type === CHANGE_CATEGORY) {
    return {
      ...state,
      category_state: action.payload.category
    };
  }

  if (action.type === TOGGLE_SIDENAV) {
    return {
      ...state,
      sidenav_toggle: !state.sidenav_toggle
    };
  }

  return state;
}
