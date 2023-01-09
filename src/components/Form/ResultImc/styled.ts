import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex: 1;
  align-items: center;

  padding-top: 30px;
  border-radius: 50px;
`;

export const ResultContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextMenssage = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-weight: bold;
`;

export const TextImc = styled.Text`
  font-size: 48px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-weight: bold;
`;

export const TextClassification = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-weight: bold;

  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 20px;
  margin-top: 5px;
`;
