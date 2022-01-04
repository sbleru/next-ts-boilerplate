import { useUserContext } from "@/contexts/auth";

export const useUser = () => {
  const { user, setUser } = useUserContext();
  return {
    user,
    setUser,
  };
};
