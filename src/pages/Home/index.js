import React, { useState } from 'react';
import server from '../../../server.json';
import { Container, List } from './styles';

import Item from '../../components/Item';

const Home = () => {
  const [products, setProducts] = useState(server.products);

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
