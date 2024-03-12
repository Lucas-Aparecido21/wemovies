import Header from "../../Components/Header";
import {
  Container,
  ContainerCart,
  Divider,
  FooterCart,
  StyledNavLink,
  SubHeaderContainer,
} from "./style";
import CartItem from "./Components/CartItem";
import { useCart } from "../../zustand/useCart";

export function Cart() {
  const { cartItems } = useCart();

  return (
    <>
      <Container>
        <Header />
        <ContainerCart>
          <SubHeaderContainer>
            <span>PRODUTO</span>
            <span>QTD</span>
            <span>SUBTOTAL</span>
          </SubHeaderContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <Divider />
          <FooterCart>
            <div>
              <StyledNavLink to="/order-completed">
                FINALIZAR PEDIDO
              </StyledNavLink>
            </div>
            <div>
              <span>TOTAL</span>
              <p>R$ 29,00</p>
            </div>
          </FooterCart>
        </ContainerCart>
      </Container>
    </>
  );
}
