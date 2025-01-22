import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { content } from "@/lib/content";
import { Building2, Mail, Phone } from "lucide-react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styling for the toasts

// Interface for form elements
interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

export default function Contact() {
  // Form submit handler with validation
  const handleSubmit = (e: React.FormEvent<ContactForm>) => {
    e.preventDefault(); // Prevent page refresh

    const form = e.target as ContactForm;

    // Getting form values
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const message = form.elements.message.value;

    // Simple Validation
    if (!name || !email || !phone || !message) {
      toast.error("All fields are required!", {
        autoClose: 5000, // Toast will close after 5 seconds
      }); 
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email!", {
        autoClose: 5000,
      });
      return;
    }

    // Phone number validation (simple check for length and numeric values)
    // Regex for phone number: allows 10-digit numbers or international formats with optional '+' and country code
    const phonePattern = /^[+]?[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      toast.error("Please enter a valid phone number!", {
        autoClose: 5000,
      });
      return;
    }

    // If all fields are valid, show success toast
    toast.success("Message Sent Successfully!", {
      autoClose: 5000, // Toast will close after 5 seconds
    });
  };

  return (
    <div className="pt-24 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">545, Sector 43, Golf course Road,</p>
                  <p className="text-gray-600">Gurugram, Haryana 122003</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">9999575044, 7290006773</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">{content.company.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>

              {/* Phone Number Field (Replaces Subject) */}
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* ToastContainer component for showing toast notifications */}
      {/* <ToastContainer /> */}
    </div>
  );
}
