import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./components/login-form";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full  py-22 ">
      <Card className="w-[370px] ">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>Enter Your Details </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
