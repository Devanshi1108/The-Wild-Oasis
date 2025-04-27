import Button from "../../ui/Button";
import useCheckout from "./usecheckout";

function CheckoutButton({ bookingid }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      disabled={isCheckingOut}
      onClick={() => checkout(bookingid)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
