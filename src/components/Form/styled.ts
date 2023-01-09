import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { ImcList } from ".";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;

  bottom: 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECUNDARY};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const FormContent = styled.Pressable`
  width: 95%;
  height: auto;

  margin-top: 30px;
  padding: 10px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: 18px;
  padding-left: 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 50px;
  background-color: #f6f6f6;

  margin: 12px 0 12px 0;
  padding-left: 10px;
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  width: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;

  padding: 10px 0 10px 0;
  margin: 30px 0 30px 0;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_SECUNDARY};
  font-size: 20px;
  font-weight: 500;
`;

export const Error = styled.Text`
  color: #ff0000;
  font-weight: 12px;
  font-weight: 500;

  margin-top: -6px;
  margin-bottom: 10px;
`;

export const ShareButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 50%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;

  padding: 10px 0 10px 0;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLORS.SECUNDARY_900};
`;

export const ContentResult = styled.View`
  width: 95%;
  height: 50%;
`;

export const ContainerList = styled.View`
  align-items: center;

  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 10px;
`;

export const List = styled(
  FlatList as new (props: FlatListProps<ImcList>) => FlatList<ImcList>
)`
  width: 95%;
  height: 210px;
`;

export const ButtonHistoric = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 100px;
  margin-top: -10px;
  margin-bottom: 10px;
  left: 5px;
`;

export const TextHistoric = styled.Text`
  font-size: 13px;
  font-weight: 500;
  text-decoration: underline;
  color: #0d3304;
`;
