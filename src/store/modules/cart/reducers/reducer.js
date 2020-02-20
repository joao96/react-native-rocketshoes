import { ADD_ITEM } from '../../../../actions/cart/types';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.product];
    default:
      return state;
  }
}
