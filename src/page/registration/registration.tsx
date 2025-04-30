import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import RegistrationForm from "./components/registration-form";

const Registration: React.FC = () => {
  return (
    <div className=" flex items-center justify-center h-full  py-12 sm:p-00   sm:h-full ">
      <Card className="w-[370px]">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>{"Enter Your Details"} </CardDescription>
        </CardHeader>
        <CardContent>
          <RegistrationForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
