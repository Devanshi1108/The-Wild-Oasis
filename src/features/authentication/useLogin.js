import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Provided email or password are incorrect.");
    },
  });
  return { isLoading, login };
}

export default useLogin;
