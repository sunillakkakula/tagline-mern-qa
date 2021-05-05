import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_BY_CATEGORY_ID_REQUEST,
  PRODUCT_LIST_BY_CATEGORY_ID_SUCCESS,
  PRODUCT_LIST_BY_CATEGORY_ID_FAIL,
  PRODUCT_LIST_BY_SUB_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_SUB_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_SUB_CATEGORY_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_DETAILS_BY_SUBCATEGORY_ID_PRODUCT_ID_SUCCESS,
  PRODUCT_DETAILS_BY_SUBCATEGORY_ID_PRODUCT_ID_FAIL,
  PRODUCT_DETAILS_BY_SUBCATEGORY_ID_PRODUCT_ID_REQUEST,
  PRODUCT_DETAILS_BY_PRODUCT_ID_REQUEST,
  PRODUCT_DETAILS_BY_PRODUCT_ID_SUCCESS,
  PRODUCT_DETAILS_BY_PRODUCT_ID_FAIL,
  PRODUCT_LIST_BEST_SELLER_REQUEST,
  PRODUCT_LIST_BEST_SELLER_SUCCESS,
  PRODUCT_LIST_BEST_SELLER_FAIL,
} from "../constants/productConstants";

export const productDetailsByProductIdReducer = (
  state = { product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_BY_PRODUCT_ID_REQUEST:
      return { loading: true, product: {} };
    case PRODUCT_DETAILS_BY_PRODUCT_ID_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_BY_PRODUCT_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        // pages: action.payload.pages,
        // page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productListByCategoryIdReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_BY_CATEGORY_ID_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_BY_CATEGORY_ID_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_BY_CATEGORY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productListBySubCategoryReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_BY_SUB_CATEGORY_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_BY_SUB_CATEGORY_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_BY_SUB_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productDetailsBySubCategoryIdProductIdReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_BY_SUBCATEGORY_ID_PRODUCT_ID_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_BY_SUBCATEGORY_ID_PRODUCT_ID_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_BY_SUBCATEGORY_ID_PRODUCT_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productBestSellerReducer = (
  state = { bestSellerProducts: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_BEST_SELLER_REQUEST:
      return { loading: true, bestSellerProducts: [] };
    case PRODUCT_LIST_BEST_SELLER_SUCCESS:
      return { loading: false, bestSellerProducts: action.payload };
    case PRODUCT_LIST_BEST_SELLER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};