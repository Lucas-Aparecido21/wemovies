import Empty from "../../assets/empty.svg";
import { ContainerEmpty } from "./style";

export const TableEmpty = () => {
  return (
    <>
      <ContainerEmpty>
        <h1>Parece que não há nada por aqui :(</h1>
        <img src={Empty} alt="" />
        <button onClick={() => window.location.reload()}>
          Recarregar página
        </button>
      </ContainerEmpty>
    </>
  );
};

export default TableEmpty;
