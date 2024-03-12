import { HeaderContainer } from "./style";
import Cart from "../../assets/cart.svg";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <h2>WeMovies</h2>
        </div>
        <div>
          <p>Meu carrinho</p>
          <span>0 itens</span>
          <div>
            <img src={Cart} alt="shopping cart" />
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
