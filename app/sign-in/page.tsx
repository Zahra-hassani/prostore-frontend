"use client";
import login from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, action] = useActionState(login, {
    data: "",
    success: false,
  });
  if (state.data !== "Something went wrong") {
    localStorage.setItem("token", state.data);
  }
  if (state.success) {
    return redirect("/");
  }
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <form action={action}>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 py-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="ghost" className="w-full">
              Don't have an account? <Link href="/sign-up">Sign Up</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
