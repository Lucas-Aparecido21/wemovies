import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Container, ContainerCard } from "./style";
import { CardProps } from "../../@types/card";
import TableEmpty from "../../Components/TableEmpty";
import Teste from "../../assets/empty.svg";
import Card from "../../Components/Card";

export function Home() {
  const [cardItem, setCardItem] = useState<CardProps[]>([]);

  const getCards = async () => {
    try {
      const response = await fetch("http://localhost:3333/products");
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      const data = await response.json();
      setCardItem(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <Container>
        <Header />
        {cardItem.length > 0 ? (
          <ContainerCard>
            {cardItem.map((item) => (
              <Card key={item.id} cardItem={item} />
            ))}
          </ContainerCard>
        ) : (
          <TableEmpty />
        )}
      </Container>
    </>
  );
}
