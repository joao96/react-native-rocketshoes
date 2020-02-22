import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../actions/cart/index';

import {
  Container,
  CartContainer,
  ItemContainer,
  InfoContainer,
  ImageInfoContainer,
  IconContainer,
  CartInfoContainer,
  BoxContainer,
  AmountContainer,
  Box,
  ProductImage,
  Title,
  Price,
  AddButton,
  ButtonText,
  TotalContainer,
  BoldText,
  TotalText,
  Touchable,
} from './styles';

const Cart = ({
  cart,
  total,
  navigation,
  updateAmountRequest,
  removeFromCart,
}) => {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <CartContainer>
        {cart.length !== 0 ? (
          <>
            <CartInfoContainer
              data={cart}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <>
                  <ItemContainer key={item.id}>
                    <ImageInfoContainer>
                      <ProductImage source={{ uri: item.image }} />
                      <InfoContainer>
                        <Title>{item.title}</Title>
                        <Price>R$ {item.price}</Price>
                      </InfoContainer>
                    </ImageInfoContainer>
                    <Touchable>
                      <Icon
                        onPress={() => removeFromCart(item.id)}
                        name="delete-forever"
                        size={30}
                        color="#f44336"
                      />
                    </Touchable>
                  </ItemContainer>
                  <AmountContainer>
                    <BoxContainer>
                      <Touchable>
                        <Icon
                          onPress={() => increment(item)}
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </Touchable>
                      <Box value={`${item.amount}`} />
                      <Touchable>
                        <Icon
                          onPress={() => decrement(item)}
                          name="remove-circle-outline"
                          size={20}
                          color="#f44336"
                        />
                      </Touchable>
                    </BoxContainer>

                    <Price>R$ {item.price}</Price>
                  </AmountContainer>
                </>
              )}
            />
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <BoldText>R$ {total}</BoldText>
            </TotalContainer>
            <AddButton>
              <ButtonText>FINALIZAR PEDIDO</ButtonText>
            </AddButton>
          </>
        ) : (
          <>
            <IconContainer>
              <Icon name="remove-shopping-cart" size={150} color="#eeeeee" />
              <BoldText>Carrinho Vazio</BoldText>
            </IconContainer>
            <AddButton onPress={() => navigation.navigate('Home')}>
              <ButtonText>IR PARA LOJA</ButtonText>
            </AddButton>
          </>
        )}
      </CartContainer>
    </Container>
  );
};

Cart.defaultProps = {
  product: {},
};

Cart.propTypes = {
  updateAmountRequest: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
  }),
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
};

// state.'cart' -> name of the reducer
const mapStateToProps = state => ({
  cart: state.cart.map(item => ({
    ...item,
    subtotal: item.price * item.amount,
  })),
  total: state.cart.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
