import { useState, useRef } from 'react';
import { Button } from "@/components/ui/Button"; 
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  emailjs.init(process.env.NEXT_PUBLIC_EMAIL_API_KEY!);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    console.log("public key :" + process.env.NEXT_PUBLIC_EMAIL_API_KEY);
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    try {
      setLoading(true);
      await emailjs.send(serviceId!, templateId!, {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value
      });
      alert("Email sent successfully!");
    } catch (error) {
      alert("Failed to send email!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input name="name" ref={nameRef} type="text" placeholder="Your name" className="mt-2 w-full" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" ref={emailRef} type="email" placeholder="Your email" className="mt-2 w-full" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea name="message" ref={messageRef} rows={4} placeholder="Your message" className="mt-2 w-full" />
          </div>
          <div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}