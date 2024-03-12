import { useState } from "react";
import { CardProps } from "../../../../@types/card";
import {
  Container,
  DivItem,
  DivQTD,
  DivValue,
  DivExclude,
  ButtonQTD,
} from "./style";
import { maskMoney } from "../../../../utils/maskMoney";

import { MinusCircle, PlusCircle, Trash } from "phosphor-react";

export const CartItem = () => {
  const [item, setItem] = useState<CardProps>({
    id: 1,
    title: "Viúva Negra",
    price: 9.99,
    image: "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png",
  });
  return (
    <Container>
      <DivItem>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <p>{item.title}</p>
          <p>{maskMoney(item.price)}</p>
        </div>
      </DivItem>
      <DivQTD>
        <ButtonQTD>
          <MinusCircle />
        </ButtonQTD>
        <input type="text" />
        <ButtonQTD>
          <PlusCircle />
        </ButtonQTD>
      </DivQTD>
      <DivValue>
        <span>R$ 29,00</span>
      </DivValue>
      <DivExclude>
        <button>
          <Trash />
        </button>
      </DivExclude>
    </Container>
  );
};
export default CartItem;
