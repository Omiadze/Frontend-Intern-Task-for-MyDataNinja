import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LoginDefaultValues } from "../login-default-values";
import { LoginFormValues } from "../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./schema";
import { Label } from "@radix-ui/react-label";

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: LoginDefaultValues,
  });

  const onSubmit = (values: LoginFormValues) => {
    if (!values.password) {
      alert("Please fill in the password field");
      return;
    }
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
      {/* Email */}
      <div className="flex flex-col space-y-1.5">
        <Label
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email
        </Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...field}
            />
          )}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col space-y-1.5">
        <Label
          htmlFor="password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Password
        </Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...field}
            />
          )}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex justify-between">
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </div>

      {/* Redirect to Sign Up */}
      <div className="flex justify-center items-center">
        <p className="text-muted-foreground text-xs">Don't have an account?</p>
        <Button variant="link">
          <Link className="text-bold text-purple-300 text-lg" to="/signup">
            Sign Up
          </Link>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
