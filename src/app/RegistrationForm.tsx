"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "./registrationSchema";

type FormSchema = z.infer<typeof schema>;

export const RegistrationForm = ({
  onDataAction,
}: {
    onDataAction: (data: z.infer<typeof schema>) => Promise<{
      message: string;
      user?: z.infer<typeof schema>;
      issues?: string[];
    }>;
  }) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      first: "",
      last: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    //    fetch("/api/register", {
    //      method: "POST",
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //      body: JSON.stringify(data),
    //    })
    //      .then((response) => response.json())
    //      .then((data) => console.log(data));
    //  };

//    const formData = new FormData();
//    formData.append("first", data.first);
//    formData.append("last", data.last);
//    formData.append("email", data.email);
//
//    fetch("/api/registerForm", {
//      method: "POST",
//      body: formData,
//    })
//      .then((response) => response.json())
//      .then((data) => console.log(data));
    console.log(await onDataAction(data));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="first"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Your First Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Your Last Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Your email address </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
