import { CardProps } from "../../@types/card";
import { maskMoney } from "../../utils/maskMoney";
import { CardContainer } from "./style";

interface Props {
  cardItem: CardProps;
}

export const Card = ({ cardItem }: Props) => {
  return (
    <>
      <CardContainer>
        <img src={cardItem.image} alt="" />
        <span>{cardItem.title}</span>
        <p>{maskMoney(cardItem.price)}</p>
        <button>0 ADICIONAR AO CARRINHO</button>
      </CardContainer>
    </>
  );
};

export default Card;
