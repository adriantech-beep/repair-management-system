import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditSettings } from "../services/apiSettings";
import toast from "react-hot-toast";

export function useCreateSettings() {
  const queryClient = useQueryClient();

  const { mutate: createSettings, isLoading: isCreating } = useMutation({
    mutationFn: createEditSettings,
    onSuccess: () => {
      toast.success("New Company settings succesfully created");
      queryClient.invalidateQueries({
        queryKey: ["company_settings"],
      });
    },

    onError: (err) => {
      toast.error(err.message), console.log(err);
    },
  });

  return { createSettings, isCreating };
}
