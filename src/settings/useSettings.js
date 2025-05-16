import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["company_settings"], //uniquely indentify the data to query.needs to ba an array.
    queryFn: getSettings,
    //query function on fetching data.
  });

  return { isLoading, settings, error };
}
