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
  SubHeaderProduto,
  SubHeaderQTD,
  SubHeaderValue,
} from "./style";
import CartItem from "./Components/CartItem";
import { useCart } from "../../zustand/useCart";
import { maskMoney } from "../../utils/maskMoney";

export function Cart() {
  const { cartItems, cartItemsTotal } = useCart();
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <Container>
        <Header />
        <ContainerCart>
          <SubHeaderContainer style={{ display: isMobile ? "none" : "flex" }}>
            <SubHeaderProduto>
              <span>PRODUTO</span>
            </SubHeaderProduto>
            <SubHeaderQTD>
              <span>QTD</span>
            </SubHeaderQTD>
            <SubHeaderValue>
              <span>SUBTOTAL</span>
            </SubHeaderValue>
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
