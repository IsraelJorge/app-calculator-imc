import {
  Container,
  ResultContent,
  TextImc,
  TextMenssage,
  TextClassification,
} from "./styled";

type ResultImcProps = {
  messageImc: string | null;
  resultImc: string | null;
  classification: string;
};

export const ResultImc = ({
  messageImc,
  resultImc,
  classification,
}: ResultImcProps) => {
  return (
    <Container>
      <ResultContent>
        <TextMenssage>{messageImc}</TextMenssage>
        <TextImc>{resultImc}</TextImc>
        <TextClassification>{classification}</TextClassification>
      </ResultContent>
    </Container>
  );
};
