import { ADD_ITEM } from './types';

export function addItemCart(product) {
  return {
    type: ADD_ITEM,
    product,
  };
}
