import { useState } from "react";
import {
  Vibration,
  Share,
  Keyboard,
  Alert,
  ListRenderItemInfo,
} from "react-native";
import { ItemListImc } from "./ItemListImc";
import { ResultImc } from "./ResultImc";
import {
  Container,
  FormContent,
  Label,
  Input,
  Button,
  TextButton,
  Error,
  ShareButton,
  ContentResult,
  List,
  ButtonHistoric,
  TextHistoric,
  ContainerList,
} from "./styled";

export type ImcList = {
  id: number;
  imc: string;
  classificationImc: string;
};

export const Form = () => {
  const [mensageImc, setMensageImc] = useState<string | null>(
    "Preencha o peso e altura"
  );
  const [textButton, setTextButton] = useState("Calcular");
  const [imc, setImc] = useState("");
  const [hight, setHight] = useState("");
  const [weight, setWeight] = useState("");
  const [classificationImc, setClassificationImc] = useState("");
  const [error, setError] = useState("");
  const [imcList, setImcList] = useState<ImcList[]>([]);
  const [id, setId] = useState(0);

  const [isVisibleHistoric, setIsVisibleHistoric] = useState(false);
  const [textButtonHistoric, setTextButtonHistoric] =
    useState("Exibir histórico");

  const handleError = () => {
    Vibration.vibrate();
    setError("Preencha os campos*");
  };

  const handleVisibleHistoric = () => {
    if (imcList.length === 0) {
      Alert.alert("Histórico vazio!", "Faça algum cálculo.");
      return;
    }

    !isVisibleHistoric
      ? setTextButtonHistoric("Fechar histórico")
      : setTextButtonHistoric("Exibir histórico");
    setIsVisibleHistoric(!isVisibleHistoric);
  };

  const handleClassificationImc = (imc: string) => {
    const imcNumber = Number(imc.replace(",", "."));

    const isUnderWeight = imcNumber < 18.5;
    const isNormalWeight = imcNumber >= 18.5 && imcNumber <= 24.99;
    const isOverWeight = imcNumber >= 25 && imcNumber <= 29.99;
    const isObesityDegreeI = imcNumber >= 30 && imcNumber <= 34.99;
    const isObesityDegreeII = imcNumber >= 35 && imcNumber <= 39.99;
    const isObesityDegreeIII = imcNumber >= 40;

    function setClasification(classification: string) {
      setClassificationImc(classification);
      return classification;
    }

    if (isUnderWeight) {
      return setClasification("Abaixo do peso.");
    }
    if (isNormalWeight) {
      return setClasification("Peso ideal.");
    }
    if (isOverWeight) {
      return setClasification("Levemente acima do peso.");
    }
    if (isObesityDegreeI) {
      return setClasification("Obesidade grau I.");
    }
    if (isObesityDegreeII) {
      return setClasification("Obesidade grau II (severa).");
    }
    if (isObesityDegreeIII) {
      return setClasification("Obesidade grau III (mórbida).");
    }

    return "";
  };

  const imcCalculator = () => {
    const weightTreated = weight.replace(",", ".");
    const hightTreated = hight.replace(",", ".");

    if (isNaN(Number(weightTreated)) || isNaN(Number(hightTreated))) {
      return Alert.alert("Erro!", "Digite valores válidos");
    }

    const result = (Number(weightTreated) / Number(hightTreated) ** 2)
      .toFixed(2)
      .replace(".", ",");

    const classification = handleClassificationImc(result);

    setImcList([
      ...imcList,
      { id: id, imc: result, classificationImc: classification },
    ]);

    setId((prev) => prev + 1);

    return setImc(result);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Meu IMC é igual: ${imc}.\nClassificada em: ${classificationImc}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validationIMC = () => {
    if (weight.length > 0 && hight.length > 0) {
      imcCalculator();
      setHight("");
      setWeight("");
      setMensageImc("Seu IMC é igual: ");
      setTextButton("Calcular Novamente");
      setError("");
    } else {
      handleError();
      setImc("");
      setClassificationImc("");
      setTextButton("Calcular");
      setMensageImc("Preencha o peso e altura");
    }
  };

  const newCalculation = () => {
    setImc("");
    setClassificationImc("");
    setTextButton("Calcular");
    setMensageImc("Preencha o peso e altura");
  };

  const renderItem = ({ item }: ListRenderItemInfo<ImcList>) => {
    return (
      <ItemListImc
        imcItem={item.imc}
        classificationImc={item.classificationImc}
      />
    );
  };

  return (
    <Container>
      {!imc ? (
        <FormContent onPress={Keyboard.dismiss}>
          <Label>Altura</Label>
          <Input
            keyboardType="numeric"
            placeholder="Ex. 1,75"
            onChangeText={(text: string) => setHight(text)}
            value={hight}
          />
          <Error>{error}</Error>

          <Label>Peso</Label>
          <Input
            keyboardType="numeric"
            placeholder="Ex. 70,50"
            onChangeText={(text: string) => setWeight(text)}
            value={weight}
          />
          <Error>{error}</Error>
          <Button onPress={validationIMC}>
            <TextButton>{textButton}</TextButton>
          </Button>

          <ButtonHistoric onPress={handleVisibleHistoric}>
            <TextHistoric>{textButtonHistoric}</TextHistoric>
          </ButtonHistoric>

          {isVisibleHistoric && (
            <ContainerList>
              <List
                showsVerticalScrollIndicator={false}
                data={imcList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
              />
            </ContainerList>
          )}
        </FormContent>
      ) : (
        <ContentResult>
          <ResultImc
            messageImc={mensageImc}
            resultImc={imc}
            classification={classificationImc}
          />

          <ShareButton onPress={onShare}>
            <TextButton>Compartilhar</TextButton>
          </ShareButton>

          <Button onPress={newCalculation}>
            <TextButton>{textButton}</TextButton>
          </Button>
        </ContentResult>
      )}
    </Container>
  );
};
