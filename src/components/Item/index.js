import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../actions/cart/index';

import {
  Container,
  ProductImage,
  Title,
  Price,
  AddButton,
  ButtonText,
  AmountContainer,
  AmountText,
} from './styles';

const Item = ({ product, navigation }) => {
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, item) => {
      sumAmount[item.id] = item.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <ProductImage source={{ uri: product.image }} />
      <Title>{product.title}</Title>
      <Price>{`R$ ${product.price}`}</Price>
      <AddButton onPress={() => handleAddProduct(product.id)}>
        <AmountContainer>
          <Icon name="add-shopping-cart" size={20} color="#fff" />
          <AmountText>{amount[product.id] || 0}</AmountText>
        </AmountContainer>
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
    amount: PropTypes.number,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default withNavigation(Item);
