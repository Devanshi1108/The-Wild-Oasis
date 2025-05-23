import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (user) => signUpApi(user),
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { signup, isLoading };
}

export default useSignUp;
