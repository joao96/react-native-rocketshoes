import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from '../../../actions/cart';

// * -> generator (it's an async, but more powerful)
// yield -> await
function* addToCart({ id }) {
  // select -> will retriver info from the redux state
  const productInCart = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productInCart ? productInCart.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.tron.log('Quantidade solicidade fora de estoque.');
    return;
  }

  if (productInCart) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    // put -> triggers a redux ACTION
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    console.tron.log('Quantidade solicidade fora de estoque.');
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}

// all -> register several listeners
export default all([
  // if user clicks multiple times on button and the api call isn't done -> will only take the latest call (1 time)
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
