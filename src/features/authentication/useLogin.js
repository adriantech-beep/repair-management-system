import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error("Provided email and password are incorrect");
    },
  });

  return { login, isPending };
}
