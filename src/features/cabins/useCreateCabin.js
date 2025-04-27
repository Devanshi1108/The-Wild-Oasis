import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  //Creating a Cabin
  const { isLoading: isCreating, mutate: CreateCabin } = useMutation({
    mutationFn: (cabin) => createEditCabin(cabin),
    onSuccess: () => {
      toast.success("Successfully created new cabin");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, CreateCabin };
}
