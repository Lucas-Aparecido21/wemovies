import Header from "../../Components/Header";
import {
  Container,
  ContainerCart,
  DivFooterButton,
  DivFooterTotal,
  Divider,
  FooterCart,
  StyledNavLink,
  SubHeaderContainer,
} from "./style";
import CartItem from "./Components/CartItem";
import { useCart } from "../../zustand/useCart";
import { maskMoney } from "../../utils/maskMoney";

export function Cart() {
  const { cartItems, cartItemsTotal } = useCart();

  return (
    <>
      <Container>
        <Header />
        <ContainerCart>
          <SubHeaderContainer>
            <span>PRODUTO</span>
            <span>QTD</span>
            <span>SUBTOTAL</span>
            <span></span>
          </SubHeaderContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <Divider />
          <FooterCart>
            <DivFooterButton>
              <StyledNavLink to="/order-completed">
                FINALIZAR PEDIDO
              </StyledNavLink>
            </DivFooterButton>
            <DivFooterTotal>
              <span>TOTAL</span>
              <p>{maskMoney(cartItemsTotal)}</p>
            </DivFooterTotal>
          </FooterCart>
        </ContainerCart>
      </Container>
    </>
  );
}
