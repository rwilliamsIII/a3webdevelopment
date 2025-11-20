"use client";
import { IconRocket } from "@tabler/icons-react";
import Navbar from "./index";
import dynamic from "next/dynamic";

dynamic(() => import("./index"), {
  ssr: true,
});

export function ClientNavbar() {
  const navbarProps = {
    logo: {
      // Use a globe or rocket icon to represent "build and deploy websites"
      icon: <IconRocket className="w-5 h-5 min-w-5 min-h-5" />,
      text: "A3 Web Development",
    },
    links: [
      { label: "Services", href: "#our-services" },
      { label: "Projects", href: "#view-our-work" },
      { label: "Contact", href: "https://www.a3marketing.com/contact-us" },
    ],
    // actions: {
    //   login: {
    //     label: "Login",
    //     onClick: () => console.log("Login clicked"),
    //   },
    //   cta: {
    //     label: "Book a call",
    //     onClick: () => console.log("CTA clicked"),
    //     variant: "default" as "default" | "secondary" | undefined,
    //   },
    // },
  };

  return <Navbar {...navbarProps} />;
}
