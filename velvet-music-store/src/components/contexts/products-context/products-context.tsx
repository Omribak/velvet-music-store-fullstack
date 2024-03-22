import axios from 'axios';
import React, { ReactNode, useContext, useEffect, useReducer } from 'react';
import { products_url } from '../../../constants/Url/url';
import reducer from '../../reducers/ProductsReducer';
import {
  CHANGE_CATEGORY,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_FILTERED_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  RESET_FILTERS,
  TOGGLE_SIDENAV
} from '../../../constants/ReducerActions/productsActions';

const ProductsContext = React.createContext<ProductsState | null>(null);

type ProductsContextProviderProps = {
  children: ReactNode;
};

export type Product = {
  brand: string;
  name: string;
  image: string;
  price: number;
  category: string;
  sales: string;
  description: string;
  _id: string;
};

export type Filters = {
  brands: string[];
  sales: string[];
};

export type ApplyFiltersAndSortType = (options: {
  filters?: Filters;
  sort?: string;
  maxPrice?: number;
}) => void;

export interface SearchProductsResponse {
  results: number;
  products: Product[];
}

type ToggleSideNavType = () => void;

type FetchCategoryProducts = (category: string) => void;

type FetchSingleProduct = (product_id: string) => void;

type ResetFiltersType = () => void;

type ChangeCategoryStateType = (category: string) => void;

type SearchProductsType = (
  searchText: string
) => void | Promise<SearchProductsResponse>;

export type ProductsState = {
  products: Product[];
  original_products: Product[];
  category_state: string;
  products_loading: boolean;
  products_error: boolean;
  num_products: number;
  filters_state: Filters;
  sort_state: string;
  single_product: Product | null;
  sidenav_toggle: boolean;
  fetchCategoryProducts: FetchCategoryProducts;
  ApplyFiltersAndSort: ApplyFiltersAndSortType;
  GetSingleProduct: FetchSingleProduct;
  ResetFilters: ResetFiltersType;
  ChangeCategoryState: ChangeCategoryStateType;
  SearchProducts: SearchProductsType;
  ToggleSideNav: ToggleSideNavType;
};

const initialState: ProductsState = {
  products: [],
  original_products: [],
  category_state: '',
  products_loading: false,
  products_error: false,
  num_products: 0,
  filters_state: {
    brands: [],
    sales: []
  },
  sidenav_toggle: false,
  sort_state: '',
  single_product: null,
  fetchCategoryProducts: () => {},
  ApplyFiltersAndSort: () => {},
  GetSingleProduct: () => {},
  ResetFilters: () => {},
  ChangeCategoryState: () => {},
  SearchProducts: () => {},
  ToggleSideNav: () => {}
};

export function useProductsContext() {
  const ProductsCtx = useContext(ProductsContext);
  return ProductsCtx;
}

export const ProductsProvider = ({
  children
}: ProductsContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(products_url);
      const products = response.data.products;
      const results_products = response.data.results;
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: { products, num_products: results_products }
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const filterProducts = (category: string): Product[] => {
    return state.products.filter((product) => product.category === category);
  };

  const fetchCategoryProducts: FetchCategoryProducts = (category: string) => {
    const filteredProducts = filterProducts(category);
    return filteredProducts;
  };

  const ApplyFiltersAndSort = async ({
    filters,
    sort,
    maxPrice
  }: {
    filters?: Filters;
    sort?: string;
    maxPrice?: number;
  }) => {
    let queryFilterURL = products_url + '?';

    if (filters && filters.brands.length > 0) {
      queryFilterURL += `brand=${filters.brands.join(',')}&`;
    }

    if (filters && filters.sales.length > 0) {
      queryFilterURL += `sales=${filters.sales.join(',')}&`;
    }

    if (sort) {
      queryFilterURL += `sortBy=${sort}&`;
    }

    if (maxPrice) {
      queryFilterURL += `maxPrice=${maxPrice}`;
    }

    try {
      const response = await axios.get(queryFilterURL);
      const filter_products = response.data.products;

      dispatch({
        type: GET_FILTERED_PRODUCTS_SUCCESS,
        payload: { filter_products, filters_state: filters, sort_state: sort }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const GetSingleProduct = async (product_id: string) => {
    try {
      const response = await axios.get(`${products_url}/${product_id}`);
      const product = response.data.product;
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: { product }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ResetFilters = () => {
    dispatch({ type: RESET_FILTERS });
  };

  const ChangeCategoryState = (category: string) => {
    dispatch({ type: CHANGE_CATEGORY, payload: { category } });
  };

  const SearchProducts = async (searchText: string) => {
    try {
      const response = await axios.get(`${products_url}/search/${searchText}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const ToggleSideNav = () => {
    dispatch({ type: TOGGLE_SIDENAV });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchCategoryProducts,
        ApplyFiltersAndSort,
        GetSingleProduct,
        ResetFilters,
        ChangeCategoryState,
        SearchProducts,
        ToggleSideNav
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
