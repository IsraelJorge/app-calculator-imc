import { View, Text } from "react-native";
import { Container, Content, Title, TextInfo, ContentInfo } from "./styled";

type ItemListImcProps = {
  imcItem: string;
  classificationImc: string;
};

export const ItemListImc = ({
  imcItem,
  classificationImc,
}: ItemListImcProps) => {
  return (
    <Container>
      <Content>
        <Title>IMC</Title>
        <ContentInfo>
          <TextInfo>{imcItem}</TextInfo>
        </ContentInfo>
      </Content>
      <Content>
        <Title>Classificação</Title>
        <ContentInfo>
          <TextInfo>{classificationImc}</TextInfo>
        </ContentInfo>
      </Content>
    </Container>
  );
};
