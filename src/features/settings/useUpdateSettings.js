import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as UpdateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: (column) => UpdateSettingApi(column),
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSettings };
}
