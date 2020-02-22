import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

const Item = ({ product, navigation, addToCartRequest }) => {
  function handleAddProduct(id) {
    addToCartRequest(id);
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
          <AmountText>{product.amount || 0}</AmountText>
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
  addToCartRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default withNavigation(connect(null, mapDispatchToProps)(Item));
