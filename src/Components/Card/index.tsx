import { useState } from "react";
import { CardProps } from "../../@types/card";
import { maskMoney } from "../../utils/maskMoney";
import { useCart } from "../../zustand/useCart";
import { CardContainer } from "./style";

interface Props {
  cardItem: CardProps;
}

export const Card = ({ cardItem }: Props) => {
  const [quantity, setQuantity] = useState(0);
  const [buttonColor, setButtonColor] = useState("#009edd"); // Cor inicial do botão
  const { addItemToCart } = useCart();

  function handleAddToCart() {
    const movieToAdd = {
      ...cardItem,
      quantity: 1,
    };
    addItemToCart(movieToAdd);
    setQuantity(1);
    setButtonColor("#039B00");
  }

  return (
    <>
      <CardContainer>
        <img src={cardItem.image} alt="" />
        <span>{cardItem.title}</span>
        <p>{maskMoney(cardItem.price)}</p>
        <button
          onClick={handleAddToCart}
          style={{ backgroundColor: buttonColor }}>
          {quantity} ADICIONAR AO CARRINHO
        </button>
      </CardContainer>
    </>
  );
};

export default Card;
