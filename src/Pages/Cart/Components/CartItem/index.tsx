import { CardProps } from "../../../../@types/card";
import {
  Container,
  DivItem,
  DivQTD,
  DivValue,
  DivExclude,
  ContainerMobile,
  DivItemMobile,
  DivInfoProdutoMobile,
  DivQTDMobile,
} from "./style";
import { maskMoney } from "../../../../utils/maskMoney";

import { MinusCircle, PlusCircle, Trash } from "phosphor-react";
import { useCart } from "../../../../zustand/useCart";
interface Props {
  item: CardProps;
}
export const CartItem = ({ item }: Props) => {
  const totalItem = item.price * Number(item.quantity);
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const isMobile = window.innerWidth <= 700;

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
    <>
      {isMobile ? (
        <ContainerMobile>
          <DivItemMobile>
            <div>
              <img src={item.image} alt="" />
            </div>
          </DivItemMobile>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <DivInfoProdutoMobile>
              <p>{item.title}</p>
              <p>{maskMoney(item.price)}</p>
              <button onClick={handleDeleteItem}>
                <Trash size={18} />
              </button>
            </DivInfoProdutoMobile>
            <DivQTDMobile>
              <button onClick={handleRemoveQuantity}>
                <MinusCircle size={22} />
              </button>
              <input type="text" value={item.quantity} />
              <button onClick={handleAddQuantity}>
                <PlusCircle size={22} />
              </button>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#999999" }}>SUBTOTAL</span>
                <span>{maskMoney(totalItem)}</span>
              </div>
            </DivQTDMobile>
          </div>
        </ContainerMobile>
      ) : (
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
            <button onClick={handleRemoveQuantity}>
              <MinusCircle size={22} />
            </button>
            <input type="text" value={item.quantity} />
            <button onClick={handleAddQuantity}>
              <PlusCircle size={22} />
            </button>
          </DivQTD>
          <DivValue>
            <span>{maskMoney(totalItem)}</span>
          </DivValue>
          <DivExclude>
            <button onClick={handleDeleteItem}>
              <Trash size={22} />
            </button>
          </DivExclude>
        </Container>
      )}
    </>
  );
};
export default CartItem;
