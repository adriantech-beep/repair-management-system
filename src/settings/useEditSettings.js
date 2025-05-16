import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditSettings } from "../services/apiSettings";

export function useEditSettings() {
  const queryClient = useQueryClient();

  const { mutate: editSettings, isLoading: isEditing } = useMutation({
    mutationFn: ({ newSettingsData, id }) =>
      createEditSettings(newSettingsData, id),
    onSuccess: () => {
      toast.success("New settings succesfully edited");

      queryClient.invalidateQueries({
        queryKey: ["company_settings"],
      });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { editSettings, isEditing };
}
