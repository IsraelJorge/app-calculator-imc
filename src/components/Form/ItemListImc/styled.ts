import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Content = styled.View`
  width: 50%;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_SECUNDARY};
  font-size: 17px;
  font-weight: 500;
  /* border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #032612; */
`;

export const ContentInfo = styled.View`
  height: 40px;
  justify-content: center;
`;

export const TextInfo = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.TEXT_SECUNDARY};
`;
