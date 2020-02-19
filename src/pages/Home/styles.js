import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #191921;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
})`
  margin-top: 30px;
  color: #191921;
`;
