import Link from "next/link";
import SmsConsentForm from "../components/SmsConsentForm";

export const metadata = {
  title: "Text Updates Sign Up | First Class Home Mortgage",
  description:
    "Sign up to receive mortgage updates, market resources, and event info via text from First Class Home Mortgage.",
};

export default function SmsConsentPage() {
  return (
    <div className="bg-gray-100 p-6">
      <Link href={"/"} className="underline">
        Back
      </Link>
      <h1 className="text-3xl font-bold mb-4 mt-2">
        Sign Up for Text Updates
      </h1>
      <p className="mb-6 max-w-md">
        Enter your information below to opt in to text messages from First
        Class Home Mortgage. You can opt out at any time by replying STOP.
      </p>
      <SmsConsentForm />
    </div>
  );
}
