import { useQuery } from "@tanstack/react-query";
import { getPhones } from "../services/apiPhones";
import { useSearchParams } from "react-router-dom";

export function usePhones() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRaw = searchParams.get("sortByTechnician");

  const sortBy =
    !sortByRaw || sortByRaw === "all"
      ? null
      : { field: "assignee", value: sortByRaw };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: phones, count } = {},
    error,
  } = useQuery({
    queryKey: ["job_orders", filter, sortBy, page],
    queryFn: () => getPhones({ filter, sortBy, page }),
  });

  return { isLoading, phones, error, count };
}
