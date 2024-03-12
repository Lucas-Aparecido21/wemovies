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
import { useCart } from "../../../../zustand/useCart";
interface Props {
  item: CardProps;
}
export const CartItem = ({ item }: Props) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  const handleAddQuantity = () => {
    changeCartItemQuantity(item.id, "increase");
  };

  const handleRemoveQuantity = () => {
    if (item.quantity === 1) return;

    changeCartItemQuantity(item.id, "decrease");
  };

  const handleDeleteItem = () => {
    removeCartItem(item.id);
  };
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
        <ButtonQTD onClick={handleRemoveQuantity}>
          <MinusCircle />
        </ButtonQTD>
        <input type="text" value={item.quantity} />
        <ButtonQTD onClick={handleAddQuantity}>
          <PlusCircle />
        </ButtonQTD>
      </DivQTD>
      <DivValue>
        <span>R$ 29,00</span>
      </DivValue>
      <DivExclude>
        <button onClick={handleDeleteItem}>
          <Trash />
        </button>
      </DivExclude>
    </Container>
  );
};
export default CartItem;
