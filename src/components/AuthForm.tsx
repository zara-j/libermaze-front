import useLogin from "@/hooks/use-login";
import { LucideLoader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import useRegister from "@/hooks/use-register";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { AuthMode } from "@/types/auth.model";

interface IAuthFormProps {
  mode: AuthMode;
}

const AuthForm: React.FC<IAuthFormProps> = ({ mode }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { mutate: loginMutate, status: loginStatus } = useLogin();
  const { mutate: registerMutate, status: registerStatus } = useRegister();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (mode === "register") {
      const { username, email, password, re_password } = formValues;

      if (password !== re_password) {
        toast.error("Passwords do not match");
        return;
      }

      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }

      if (
        username.trim() &&
        email.trim() &&
        password.trim() &&
        re_password.trim()
      ) {
        registerMutate({ username, email, password, re_password });
      } else {
        toast.error("Please fill all inputs");
      }
    } else {
      const { username, password } = formValues;

      if (username.trim() && password.trim()) {
        loginMutate({ username, password });
      } else {
        toast.error("Please fill all fields");
      }
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };
  const isPending = loginStatus === "pending" || registerStatus === "pending";

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          {mode === "login"
            ? "Sign in to your account"
            : "Create a new account"}
        </CardTitle>
        <CardDescription>
          {mode === "login"
            ? "Enter your credentials to access your account"
            : "Fill in the details to create your account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={formValues.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              required
            />
          </div>

          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="repeat-password">Repeat Password</Label>
              <Input
                id="repeat-password"
                type="password"
                placeholder="Repeat your password"
                value={formValues.re_password}
                onChange={(e) =>
                  handleInputChange("re_password", e.target.value)
                }
                required
              />
            </div>
          )}

          <Button className="w-full" disabled={isPending}>
            {isPending && (
              <LucideLoader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {mode === "login" ? "log in" : "Create account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
export default AuthForm;
