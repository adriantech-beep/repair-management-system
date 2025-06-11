import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export default function useUser() {
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  if( data ){
    return {
      isLoading,
      user: data.user, 
      isAuthenticated: data.user.role === "authenticated",
      isAdmin: data.user_role !== 'user'
    }
  }

  return { 
    isLoading, 
    user: null, 
    isAuthenticated: false,
    isAdmin: false
  };
}
