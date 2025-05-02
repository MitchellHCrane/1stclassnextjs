"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";

const callsToAction = [
  { name: "Call", href: "tel:3859991871", icon: PhoneIcon },
  { name: "Email", href: "mailto:loans@troywarner.com", icon: EnvelopeIcon },
];
const resources = [
  {
    name: "Get Pre-Approved",
    href: "https://firstclasshomemortgage.my1003app.com/102983/register",
    target: "_blank",
  },
  {
    name: "Mortgage Calculator",
    href: "/mortgage-calculator",
    target: "_self",
  },
  {
    name: "Loan Application",
    href: "https://firstclasshomemortgage.my1003app.com/102983/register",
    target: "_blank",
  },
  {
    name: "Down Payment Assistance",
    href: "https://dpa.1stclasshomemortgage.com/",
    target: "_blank",
  },
  {
    name: "Careers",
    href: "/careers",
    target: "_self",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#004e82] sticky top-0 shadow-sm z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="">
            <span className="sr-only">First Class Home Mortgage</span>
            <Image
              src="/images/fcLogo.png"
              alt="First Class Home Mortgage Logo"
              width={200}
              height={80}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden items-center lg:flex lg:gap-x-8">
          {/* Resources  */}
          <Popover className="relative">
            <PopoverButton className="flex items-center text-white gap-x-1 cursor-pointer">
              Resources
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute right-0 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 hover:bg-gray-50"
                  target={item.target}
                >
                  {item.name}
                </a>
              ))}
            </PopoverPanel>
          </Popover>
          {/* Contact  */}
          <Popover className="relative">
            <PopoverButton className="flex text-white items-center gap-x-1 cursor-pointer">
              Contact
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-[#004e82]"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          {/* Testimonials  */}
          <a
            href="/testimonials"
            className="flex text-white items-center gap-x-1 cursor-pointer"
          >
            Testimonials
          </a>
          {/* CTA Button  */}
          <a
            href="#"
            className="rounded-md bg-[#f5bb54] hover:bg-[#f5bb54]/85 px-2 py-1 font-semibold text-white shadow-sm focus-visible:outline-offset-2 focus-visible:outline-[#f5bb54]"
          >
            Call 385-999-1871
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40 pointer-events-none" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-scroll bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">First Class Home Mortgage</span>
              <Image
                alt="first class home mortgage"
                src="/images/fchmLogoColor.png"
                width={32}
                height={32}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Resources  */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 hover:bg-gray-50">
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {resources.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 hover:bg-gray-50"
                        target={item.target}
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/testimonials"
                  className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50"
                >
                  Testimonials
                </Link>
                <Link
                  href="/privacy-policy"
                  className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50"
                >
                  Privacy Policy
                </Link>
                <a
                  href="#"
                  className="rounded-md bg-[#f5bb54] hover:bg-[#f5bb54]/85 px-2 py-1 font-semibold text-white shadow-sm focus-visible:outline-offset-2 focus-visible:outline-[#f5bb54]"
                >
                  Call 385-999-1871
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
