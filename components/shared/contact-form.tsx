"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/lib/constants/site";

type ContactCopy = {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  success: string;
  validation: {
    name: string;
    email: string;
    message: string;
  };
};

type ContactFormProps = {
  copy: ContactCopy;
};

export function ContactForm({ copy }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const whatsappUrl = COMPANY.whatsappUrl;

  const formSchema = z.object({
    name: z.string().min(2, copy.validation.name),
    email: z.string().email(copy.validation.email),
    company: z.string().optional(),
    message: z.string().min(12, copy.validation.message),
  });

  type ContactValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 450));
    setSubmitted(true);
    reset();
  };

  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle>{copy.submit}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">
              {copy.name}
            </label>
            <Input id="name" {...register("name")} aria-invalid={Boolean(errors.name)} />
            {errors.name ? <p className="text-sm text-red-400">{errors.name.message}</p> : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              {copy.email}
            </label>
            <Input id="email" type="email" {...register("email")} aria-invalid={Boolean(errors.email)} />
            {errors.email ? <p className="text-sm text-red-400">{errors.email.message}</p> : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="company">
              {copy.company}
            </label>
            <Input id="company" {...register("company")} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="message">
              {copy.message}
            </label>
            <Textarea id="message" {...register("message")} aria-invalid={Boolean(errors.message)} />
            {errors.message ? <p className="text-sm text-red-400">{errors.message.message}</p> : null}
          </div>

          <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
            <SendHorizontal className="mr-2 h-4 w-4" />
            {copy.submit}
          </Button>

          {submitted ? (
            <div className="space-y-3 rounded-lg border border-primary/25 bg-primary/10 p-4">
              <p className="inline-flex items-center gap-2 text-sm text-primary-strong">
                <CheckCircle2 className="h-4 w-4" />
                {copy.success}
              </p>
              <Button asChild variant="outline" className="hover:border-primary/45 hover:bg-primary/5">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Continuar en WhatsApp
                </a>
              </Button>
            </div>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
