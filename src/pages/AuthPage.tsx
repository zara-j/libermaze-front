import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import AuthForm from "@/components/AuthForm";
import { AuthMode } from "@/types/auth.model";


const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<AuthMode>(
    () => (searchParams.get("mode") as AuthMode) || "login"
  );

  useEffect(() => {
    setMode(searchParams.get("mode") as AuthMode);
  }, [searchParams]);

  return (
    <section className="flex flex-col justify-center gap-12 overflow-hidden md:flex-row-reverse">
      <div className="flex-1">
        <h1 className="text-xl font-bold">
          {mode === "login" ? "login" : "sign up"}
        </h1>
        <AuthForm mode={mode} />
        <div className="flex items-center gap-2">
          <p className="text-sm">
            {mode === "login" ? "Are you not a member?" : "Are you a member?"}
          </p>
          <Button
            size="sm"
            variant="link"
            className="cursor-pointer"
            onClick={() => {
              if (mode === "login") setSearchParams("mode=register");
              else setSearchParams("mode=login");
            }}
          >
            {mode === "login" ? "sign up" : "login"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
