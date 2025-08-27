import useAuthStore from "@/store/use-auth-store";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/utils";
import toast from "react-hot-toast";
import { LoginPayloadModel, TokenResponse, UserResponse } from "@/types/auth.model";

const useLogin = () => {
  const navigate = useNavigate();
  const { setId, setUserName, setEmail, setAccess, setRefresh } = useAuthStore();

  return useMutation({
    mutationFn: async (payload: LoginPayloadModel) => {
      
      
        const tokenRes = await axiosInstance.post<TokenResponse>(
            "/users/auth/jwt/create/", 
            payload
        );
        setAccess(tokenRes.data.access);
        setRefresh(tokenRes.data.refresh)

        const userRes = await axiosInstance.get<UserResponse>(
            "/users/auth/users/me/", 
            {
            headers: {
                Authorization: `Bearer ${tokenRes.data.access}`,
            },
        });

      setId(userRes.data.id.toString());
      setUserName(userRes.data.username);
      setEmail(userRes.data.email);

      return userRes.data;
    },
    onSuccess: () => {
      navigate("/");
      toast.success("Welcome");
    },
    onError() {
      toast.error("Login unsucsessful");
    },
  });
};

export default useLogin;
