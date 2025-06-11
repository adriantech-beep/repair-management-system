import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditPhone, deletePhone } from "../services/apiPhones";
import toast from "react-hot-toast";

export function useUpdatePhone(mutationName, successMessage) {
  const queryClient = useQueryClient();
  let mode = mutationName;
  let updateFunction;

  if (mode === "edit") {
    updateFunction = createEditPhone;
  }

  if (mode === "delete") {
    updateFunction = deletePhone;
  }

  if (mode === "create") {
    updateFunction = createEditPhone;
  }
  const { mutate, isLoading } = useMutation({
    mutationFn:
      mode === "edit"
        ? ({ newPhoneData, id }) => updateFunction(newPhoneData, id)
        : updateFunction,

    onSuccess: () => {
      toast.success(successMessage);
      queryClient.invalidateQueries({
        queryKey: ["job_orders"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });

  return { mutate, isLoading };
}
