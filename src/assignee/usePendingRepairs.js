import { useQuery } from "@tanstack/react-query";
import { getPendingRepairs } from "../services/apiPhones";

export function usePendingRepairs() {
  const { isPending, data: pendingRepairs } = useQuery({
    queryKey: ["pendingRepairs"],
    queryFn: getPendingRepairs,
  });

  return { isPending, pendingRepairs };
}
