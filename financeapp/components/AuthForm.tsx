"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const formSchema = (type:string) => z.object({
  email: z.email(),          
  password: z.string().min(8),
  firstname:type ==="sign-in"?z.string().optional() : z.string(),
  lastname:type ==="sign-in"?z.string().optional() : z.string().min(3),
  address:type ==="sign-in"?z.string().optional() : z.string().max(50),
  state: type ==="sign-in"?z.string().optional(): z.string().min(3).max(6),
  postalcode:type ==="sign-in"?z.string().optional(): z.string().min(3),
  dob:type ==="sign-in"?z.string().optional(): z.string().min(3),

});
  

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const schema = formSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      state: "",
      postalcode: "",
      dob: "",
    },
  });
  // 2. Define a submit handler.
  const onSubmit=(values: z.infer<typeof schema>) => {
    // Do something with the form values.
    setIsLoading(true);
    try {
      console.log(values);
    } catch (error) {
      console.log(error)
    }
    finally{

      setIsLoading(false);
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "link you account to get started"
                : "please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* palid*/}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">First Name</FormLabel>
                        <div className="flex w-full flex-col">
                          <FormControl>
                            <Input
                              placeholder="enter your first name"
                              className="input-class"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="form-message" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">Last Name</FormLabel>
                        <div className="flex w-full flex-col">
                          <FormControl>
                            <Input
                              placeholder="enter your last name"
                              className="input-class"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="form-message" />
                        </div>
                      </FormItem>
                    )}
                  />
                  </div>
                                    <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">Your address</FormLabel>
                        <div className="flex w-full flex-col">
                          <FormControl>
                            <Input
                              placeholder="your address"
                              className="input-class"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="form-message" />
                        </div>
                      </FormItem>
                    )}
                  />
                                  <div className="flex gap-4">

                                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">State</FormLabel>
                        <div className="flex w-full flex-col">
                          <FormControl>
                            <Input
                              placeholder="example:Mumbai"
                              className="input-class"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="form-message" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postalcode"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">Postal code</FormLabel>
                        <div className="flex w-full flex-col">
                          <FormControl>
                            <Input
                              placeholder="400001"
                              className="input-class"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="form-message" />
                        </div>
                      </FormItem>
                    )}
                  />
                  </div>
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">Date of Birth</FormLabel>
                        <div className="flex w-full flex-col">
                          <FormControl>
                            <Input
                              placeholder="YYYY-MM-DD"
                              className="input-class"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="form-message" />
                        </div>
                      </FormItem>
                    )}
                  />

                </>
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="form-item">
                    <FormLabel className="form-label">email</FormLabel>
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          placeholder="enter your email"
                          className="input-class"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="form-message" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="form-item">
                    <FormLabel className="form-label">password</FormLabel>
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          placeholder="enter your password"
                          className="input-class"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="form-message" />
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4">
                <Button className="form-btn" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      &nbsp; Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "sign in"
                  ) : (
                    "sign up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className=" flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "dont have an account?"
                : "already have an account"}
            </p>
            <Link
              href={type === "sign-in" ? "/signup" : "/signin"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
