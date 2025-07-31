"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

// Define the form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  collectionMethod: z.enum(["delivery", "collection"]),
  address: z.string().optional(),
  prescriptionFile: z
    .any()
    .refine((files) => files?.length == 1, "A prescription image is required.")
    .refine((files) => files?.[0]?.size <= 5000000, `Max file size is 5MB.`)
    .refine(
      (files) => ["image/jpeg", "image/png", "image/jpg"].includes(files?.[0]?.type),
      "Only .jpg, .jpeg, and .png formats are supported."
    ),
}).refine((data) => {
    // If delivery is chosen, address becomes required
    if (data.collectionMethod === "delivery") {
        return !!data.address && data.address.length > 5;
    }
    return true;
}, {
    message: "Address is required for delivery.",
    path: ["address"], // Point the error to the address field
});


export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      collectionMethod: "collection",
      address: "",
    },
  });

  const collectionMethod = form.watch("collectionMethod");

  // Dummy submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log("DUMMY SUBMISSION:", values);

    // Simulate a network request
    setTimeout(() => {
      toast.success("Order Submitted!", {
        description: "Thank you. We will contact you shortly to confirm your order.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="prescriptionFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prescription Image (JPEG/PNG)</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      accept="image/jpeg, image/png"
                      onChange={(e) => field.onChange(e.target.files)}
                      className="file:text-primary file:font-semibold"
                    />
                  </FormControl>
                  <FormDescription>Upload a clear photo of your script. Max 5MB.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="e.g. 071 234 5678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="collectionMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How would you like to get your order?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="collection">In-Store Collection</SelectItem>
                      <SelectItem value="delivery">Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {collectionMethod === 'delivery' && (
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Address</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 123 Main St, Parow" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}