import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./../../ui/ButtonIcon";
import SpinnerMini from "./../../ui/SpinnerMini";
import useLogOut from "./useLogOut";
function Logout() {
  const { logout, isLoading } = useLogOut();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
