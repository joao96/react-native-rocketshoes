import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  margin: 5px;
  background: #fff;
  height: 400px;
  width: 220px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 21px;
  color: #000;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;

  &:hover {
    background: ${darken(0.05, '#7159c1')};
  }
`;
