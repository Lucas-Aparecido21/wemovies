import { Loading } from "./style";

interface Props {
  isLoading: boolean;
}

export const TableLoading = ({ isLoading }: Props) => {
  return (
    <>
      <Loading style={{ display: isLoading ? "flex" : "none" }}></Loading>
    </>
  );
};

export default TableLoading;
