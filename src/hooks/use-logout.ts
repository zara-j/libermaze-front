import useAuthStore from "@/store/use-auth-store";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const reset = useAuthStore((state) => state.reset);

  return useMutation({
    mutationFn: async () => {
      reset();
    },
    onSuccess: () => {
      navigate("/auth?mode=login");
      toast.success("You logged out successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};

export default useLogout;
