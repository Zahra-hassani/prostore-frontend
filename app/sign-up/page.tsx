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
import React from "react";

function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-full max-w-md">
        <form action="{action}">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Sign Up</CardTitle>
            <CardDescription className="text-sm">
              Register your information in form below and sign up
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="grid gap-2">
                <label htmlFor="name">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ali"
                  required
                />
              </div>
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
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <Input
                  id="password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confrim password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone">Phone Number</label>
                <Input type="text" id="phone" name="phone" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 py-2">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="ghost" className="w-full">
              Already have an account? <Link href="/sign-in">Sign In</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignUpPage;
