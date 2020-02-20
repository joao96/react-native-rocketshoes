import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, List } from './styles';
import Item from '../../components/Item';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <Container>
      <List
        data={products}
        keyExtractor={product => product.id}
        renderItem={({ item }) => <Item product={item} />}
      />
    </Container>
  );
};

export default Home;
