import Link from "next/link";
import SmsConsentForm from "../components/SmsConsentForm";

export const metadata = {
  title: "Text Updates Sign Up | First Class Home Mortgage",
  description:
    "Sign up to receive mortgage updates, market resources, and event info via text from First Class Home Mortgage.",
};

export default function SmsConsentPage() {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-md mx-auto">
        <Link href={"/"} className="underline">
          Back
        </Link>
        <h1 className="text-3xl font-bold mb-4 mt-2 text-center">
          Sign Up for Text Updates
        </h1>
        <p className="mb-6 text-center">
          Enter your information below to opt in to text messages from First
          Class Home Mortgage. You can opt out at any time by replying STOP.
        </p>
        <SmsConsentForm />
        <p className="mt-6 text-sm text-gray-600 text-center">
          By opting in, you agree to our{" "}
          <Link href="/terms" className="underline">
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          . Message and data rates may apply. Reply STOP to opt out at any
          time.
        </p>
      </div>
    </div>
  );
}
