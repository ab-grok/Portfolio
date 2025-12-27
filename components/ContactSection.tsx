"use client";

import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaTwitter, FaInstagram, FaLinkedin, FaSpinner } from "react-icons/fa6";
import { useFpContext } from "@/app/[[...routes]]/layout";
import { cn } from "@/lib/utils";
import { handleMessageSubmitted } from "@/lib/sessions";
import { toast } from "@/hooks/use-toast";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(ref, { once: true, margin: "-300px" });
  const iconsInView = useInView(iconRef, { once: true, margin: "-300px" });
  const [mouseStale, setMouseStale] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [sendMessageAlt, setSendMsgAlt] = useState(false);
  const mouseMoveTimer = useRef<NodeJS.Timeout>(null);
  const { fpID } = useFpContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //relearn how to use toast component
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setFormSubmitting(true);
      const { error } = await handleMessageSubmitted({ ...formData, fpID });

      const title = error ? "That's not right!" : "Got your message!";
      const description = error ? error : "I'll get back to you shortly.";
      const variant = error ? "destructive" : "default";

      const { dismiss } = toast({ title, description, variant });
      console.log("Form submitted");

      const fd = formData;
      setFormData({ ...fd, message: error ? fd.message : "" });
    } finally {
      setInterval(() => {}, 1000);
      setFormSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    return () => {
      mouseMoveTimer.current && clearTimeout(mouseMoveTimer.current);
    };
  }, []);

  const handleMouseStale = (e: React.PointerEvent) => {
    if (mouseMoveTimer.current) clearTimeout(mouseMoveTimer.current);

    mouseStale && setMouseStale(false);
    if ((e.target as HTMLElement).id == "sendMessage") return;
    mouseMoveTimer.current = setTimeout(() => setMouseStale(true), 5000);
  };

  const handleMouseUnstale = () => {
    if (mouseMoveTimer.current) clearTimeout(mouseMoveTimer.current);
    setMouseStale(false);
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: process.env.NEXT_PUBLIC_LINKEDIN,
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: process.env.NEXT_PUBLIC_X,
      label: "X",
    },
    {
      icon: FaInstagram,
      href: process.env.NEXT_PUBLIC_IG,
      label: "Instagram",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-background px-8 py-32"
      onPointerLeave={handleMouseUnstale}
      onPointerMove={handleMouseStale}
    >
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-foreground mb-8 text-center text-4xl font-bold md:text-5xl">
            Let's <span className="text-gradient-1">Connect</span>
          </h2>

          <p className="mb-16 text-center text-lg text-gray-200">
            Have a project in mind or want to collaborate? You can contact me!
          </p>

          <form onSubmit={handleSubmit} className="mb-16 space-y-8">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card text-card-foreground focus:border-primary h-14 border-gray-700 text-base"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card text-card-foreground focus:border-primary h-14 border-gray-700 text-base"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card text-card-foreground focus:border-primary resize-none border-gray-700 text-base"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              id="sendMessage"
              disabled={formSubmitting}
              // pulse animation on in view and after a certain period
              className={cn(
                `text-primary-foreground relative h-14 w-full cursor-pointer from-blue-600 to-pink-500 text-base font-normal transition-all duration-200 ease-out`,
                formSubmitting
                  ? "bg-pink-500"
                  : "bg-primary hover:bg-linear-to-l active:translate-y-0.5 active:active:scale-98",
                cardInView &&
                  mouseStale &&
                  !formSubmitting &&
                  "animate-neon-pulse-colors",
              )}
            >
              {formSubmitting ? (
                <FaSpinner className="absolute scale-200 animate-spin fill-white" />
              ) : (
                <span>Send Message</span>
              )}
            </Button>
          </form>

          {/* Social Links */}
          <div ref={iconRef} className="text-center">
            <p className="mb-8 text-lg text-gray-200">
              Or connect with me on social media
            </p>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  initial={{}}
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  className={`hover:text-primary ${iconsInView && "animate-icon-bounce"} text-gray-300 transition-colors`}
                  aria-label={social.label}
                >
                  {/* scale with hover */}
                  <social.icon className="h-8 w-8" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
