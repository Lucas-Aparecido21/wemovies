import { HeaderContainer, StyledNavLink } from "./style";
import Cart from "../../assets/cart.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../zustand/useCart";

export const Header = () => {
  const { cartItems } = useCart();
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <HeaderContainer>
        <StyledNavLink to="/">
          <h2>WeMovies</h2>
        </StyledNavLink>
        <StyledNavLink to="/cart">
          <div>
            {!isMobile && <p>Meu carrinho</p>}
            <span>{cartItems.length} itens</span>
          </div>
          <div>
            <img src={Cart} alt="shopping cart" />
          </div>
        </StyledNavLink>
      </HeaderContainer>
    </>
  );
};

export default Header;
