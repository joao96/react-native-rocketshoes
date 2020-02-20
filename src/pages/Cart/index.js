import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../actions/cart/index';

import {
  Container,
  CartContainer,
  ItemContainer,
  InfoContainer,
  CartInfoContainer,
  AmountContainer,
  Box,
  ProductImage,
  Title,
  Price,
  AddButton,
  ButtonText,
} from './styles';

const Cart = ({ navigation, cart }) => {
  const { product } = navigation.state.params;
  return (
    <Container>
      <CartContainer>
        <CartInfoContainer>
          {cart.map(item => (
            <>
              <ItemContainer>
                <ProductImage source={{ uri: item.image }} />
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
                </InfoContainer>
              </ItemContainer>
              <AmountContainer>
                <Box value="3" />
                <Price>R$539,70</Price>
              </AmountContainer>
            </>
          ))}
        </CartInfoContainer>
        <AddButton>
          <ButtonText>FINALIZAR PEDIDO</ButtonText>
        </AddButton>
      </CartContainer>
    </Container>
  );
};

Cart.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// state.'cart' -> name of the reducer
const mapStateToProps = state => {
  // cart: state.cart.map(product => ({
  //   ...product,
  //   subtotalFormatted: formatPrice(product.price * product.amount),
  // })),
  const { cart } = state;
  console.tron.log({ cart });
  return { cart };
  // total: formatPrice(
  //   state.cart.reduce((total, product) => {
  //     return total + product.price * product.amount;
  //   }, 0)
  // ),
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
