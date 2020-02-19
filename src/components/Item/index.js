import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  Container,
  ProductImage,
  Title,
  Price,
  AddButton,
  ButtonText,
} from './styles';

const Item = ({ product, navigation }) => {
  return (
    <Container>
      <ProductImage source={{ uri: product.image }} />
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
      <AddButton
        onPress={() => {
          navigation.navigate('Cart', { product });
        }}>
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

export default withNavigation(Item);
