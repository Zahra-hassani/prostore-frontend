"use client";
import { signUp } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";

function SignUpPage() {
  const router = useRouter();
  const [data, func, pending] = useActionState(signUp, {
    message: "",
    success: false,
  });
  if (data.success) {
    console.log(data.message);
    localStorage.setItem("token", data.message.message);
    router.push("/");
  }
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={func} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="grid gap-2">
                <label htmlFor="name">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ali"
                  // required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  // required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password">Password</label>
                <Input id="password" name="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  // required
                />
                {data.message === "Passwords does not matched" &&
                  data.success === false && (
                    <div className="w-full">
                      <span className="text-red-500 text-xs">
                        {data.message}
                      </span>
                    </div>
                  )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone">Phone Number</label>
                <Input type="text" id="phone" name="phone_number" />
              </div>
            </div>
            <Button disabled={pending} type="submit" className="w-full">
              {pending ? "Signing Up" : "Sign Up"}
            </Button>
            <Button variant="ghost" className="w-full">
              Already have an account? <Link href="/sign-in">Sign In</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUpPage;
