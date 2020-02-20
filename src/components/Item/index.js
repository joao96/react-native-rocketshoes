import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import * as CartActions from '../../actions/cart/index';

import {
  Container,
  ProductImage,
  Title,
  Price,
  AddButton,
  ButtonText,
} from './styles';

const Item = ({ product, navigation, addItemCart }) => {
  function handleAddItemToCart() {
    addItemCart(product);
    navigation.navigate('Cart', { product });
  }

  return (
    <Container>
      <ProductImage source={{ uri: product.image }} />
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
      <AddButton onPress={() => handleAddItemToCart()}>
        <ButtonText>ADICIONAR</ButtonText>
      </AddButton>
    </Container>
  );
};

Item.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
// state.'cart' -> name of the reducer
// const mapStateToProps = state => ({
//   cart: state.cart.map(product => ({
//     ...product,
//     subtotalFormatted: formatPrice(product.price * product.amount),
//   })),
//   total: formatPrice(
//     state.cart.reduce((total, product) => {
//       return total + product.price * product.amount;
//     }, 0)
//   ),
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default withNavigation(connect(null, mapDispatchToProps)(Item));
