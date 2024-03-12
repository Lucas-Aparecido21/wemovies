import Header from "../../Components/Header";
import {
  Container,
  ContainerCart,
  Divider,
  FooterCart,
  SubHeaderContainer,
} from "./style";
import CartItem from "./Components/CartItem";

export function Cart() {
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
          <CartItem />
          <Divider />
          <FooterCart>
            <div>
              <button>FINALIZAR PEDIDO</button>
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
