import styled from "styled-components/native";

export const Cotainer = styled.View`
  align-items: center;
  justify-content: center;

  padding: 10px;
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;
