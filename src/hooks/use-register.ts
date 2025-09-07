import { axiosInstance } from "@/lib/utils";
import useAuthStore from "@/store/use-auth-store";
import { RegisterPayload, TokenResponse } from "@/types/auth.model";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const { setId, setUserName, setEmail, setAccess, setRefresh } =
    useAuthStore();

  return useMutation({
    mutationFn: async (payload: RegisterPayload) => {
      const tokenRes = await axiosInstance.post<TokenResponse>(
        "/users/auth/jwt/create/",
        {
          username: payload.username,
          password: payload.password,
        }
      );
      setAccess(tokenRes.data.access);
      setRefresh(tokenRes.data.refresh);

      const userRes = await axiosInstance.get("/users/auth/users/me/", {
        headers: {
          Authorization: `Bearer ${tokenRes.data.access}`,
        },
      });

      setId(userRes.data.id);
      setUserName(userRes.data.username);
      setEmail(userRes.data.email);

      return userRes.data;
    },
    onSuccess: () => {
      navigate("/");
      toast.success("Welcome!");
    },
    onError: () => {
      toast.error("Unsuccessful sign up");
    },
  });
};

export default useRegister;
