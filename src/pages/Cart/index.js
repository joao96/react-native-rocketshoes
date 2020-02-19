import React from 'react';
import PropTypes from 'prop-types';
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

const Cart = ({ navigation }) => {
  const { product } = navigation.state.params;
  return (
    <Container>
      <CartContainer>
        <CartInfoContainer>
          <ItemContainer>
            <ProductImage source={{ uri: product.image }} />
            <InfoContainer>
              <Title>{product.title}</Title>
              <Price>{product.price}</Price>
            </InfoContainer>
          </ItemContainer>
          <AmountContainer>
            <Box value="3" />
            <Price>R$539,70</Price>
          </AmountContainer>
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

export default Cart;
