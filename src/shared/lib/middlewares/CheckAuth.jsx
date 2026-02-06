import { useSelector } from "react-redux";

export const CheckAuth = ({ children }) => {
  const isLogged = useSelector((store) => store.optionsStore.isLogged);

  if (isLogged) {
    return children;
  }
};
