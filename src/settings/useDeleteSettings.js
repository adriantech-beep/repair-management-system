import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSettings as deleteSettingsApi } from "../services/apiSettings";
import toast from "react-hot-toast";

export function useDeleteSettings() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteSettings } = useMutation({
    mutationFn: deleteSettingsApi,
    onSuccess: () => {
      toast.success("Settings succesfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["company_settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteSettings };
}
