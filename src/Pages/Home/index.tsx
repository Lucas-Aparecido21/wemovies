import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Container, ContainerCard } from "./style";
import { CardProps } from "../../@types/card";
import TableEmpty from "../../Components/TableEmpty";

import Card from "../../Components/Card";
import TableLoading from "../../Components/TableLoading";

export function Home() {
  const [cardItem, setCardItem] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCards = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3333/products");
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      const data = await response.json();
      setCardItem(data);
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <Container>
        <Header />
        {!isLoading ? (
          cardItem.length > 0 ? (
            <ContainerCard>
              {cardItem.map((item) => (
                <Card key={item.id} cardItem={item} />
              ))}
            </ContainerCard>
          ) : (
            <TableEmpty />
          )
        ) : (
          <TableLoading isLoading={isLoading} />
        )}
      </Container>
    </>
  );
}
