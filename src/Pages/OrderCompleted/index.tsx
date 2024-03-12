import Header from "../../Components/Header";
import { Container, ContainerOrderCompleted } from "./style";
import Order from "../../assets/orderCompleted.svg";

export function OrderCompleted() {
  return (
    <Container>
      <Header />
      <ContainerOrderCompleted>
        <h1>Compra realizada com sucesso!</h1>
        <img src={Order} alt="" />

        <button>VOLTAR</button>
      </ContainerOrderCompleted>
    </Container>
  );
}
