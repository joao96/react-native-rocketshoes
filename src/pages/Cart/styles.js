import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #000;
`;

export const CartContainer = styled.View`
  flex: 1;
  padding: 10px;
  margin: 5px;
  background: #fff;
  border-radius: 4px;
`;

export const CartInfoContainer = styled.FlatList`
  background: #fff;
  height: 40%;
  margin-bottom: 30px;
`;

export const InfoContainer = styled.View`
  margin: 5px;
  flex: 1;
  flex-grow: 1;
  align-self: center;
`;

export const IconContainer = styled.View`
  flex: 1;
  margin-top: 50%;
  align-items: center;
  align-content: center;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1px;
  margin: 5px;
  background: #fff;
`;

export const ImageInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-items: center;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
  background-color: #eeeeee;
`;

export const BoxContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 10%;
`;

export const Box = styled.TextInput`
  height: 35px;
  background: #fff;
  border-radius: 4px;
  width: 51px;
  color: #797979;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Title = styled.Text.attrs({})`
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

export const TotalContainer = styled.View`
  flex: 1;
  margin: 10px;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 16px;
`;

export const BoldText = styled.Text`
  font-weight: bold;
  font-size: 30px;
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
`;

export const Touchable = styled.TouchableNativeFeedback``;
