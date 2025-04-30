import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { RegisterDataType } from "../../types";
import { registerFormSchema } from "./schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationDefaultValues } from "../registration-default-values/index.tsx";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDataType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: RegistrationDefaultValues,
  });

  const onSubmit = (values: RegisterDataType) => {
    if (values.password !== values.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    console.log(values);
    navigate("/login"); // Uncomment to redirect after successful registration
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="first_name">First Name</Label>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <Input
                id="first_name"
                type="text"
                placeholder="First Name"
                {...field}
              />
            )}
          />
          {errors.first_name && (
            <p className="text-sm text-destructive">
              {errors.first_name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="last_name">Last Name</Label>
          <Controller
            name="last_name"
            control={control}
            render={({ field }) => (
              <Input
                id="last_name"
                type="text"
                placeholder="Last Name"
                {...field}
              />
            )}
          />
          {errors.last_name && (
            <p className="text-sm text-destructive">
              {errors.last_name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                {...field}
              />
            )}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                {...field}
              />
            )}
          />
          {errors.password && (
            <p className="text-sm text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => (
              <Input
                id="confirm_password"
                type="password"
                placeholder="Re-enter password"
                {...field}
              />
            )}
          />
          {errors.confirm_password && (
            <p className="text-sm text-destructive">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        <div className="flex justify-between">
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-muted-foreground text-xs">
            Already have an account?
          </p>
          <Button variant="link">
            <Link className="text-bold text-lg  text-purple-300" to="/login">
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
