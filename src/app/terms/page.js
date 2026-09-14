import React from "react";
import Link from "next/link";

const Terms = () => {
  return (
    <div className="bg-gray-100 p-6">
      <Link href={"/"} className="underline">
        Back
      </Link>
      <h1 className="text-3xl font-bold mb-4 mt-2">Terms &amp; Conditions</h1>
      <p className="mb-4">Revision Date: 09/14/2026</p>

      <h2 className="text-xl font-bold mb-2">1. SMS Program Description</h2>
      <p className="mb-4">
        First Class Home Mortgage sends informational and marketing SMS
        messages to real estate professionals who have opted in. Messages may
        include mortgage updates, market resources, events, and follow-up
        communications.
      </p>

      <h2 className="text-xl font-bold mb-2">2. Message Frequency</h2>
      <p className="mb-4">
        Message frequency varies based on your engagement and business
        activity.
      </p>

      <h2 className="text-xl font-bold mb-2">3. Required Disclosures</h2>
      <p className="mb-4">
        Message and data rates may apply.
        <br />
        Text STOP to cancel. Text HELP for help.
      </p>

      <h2 className="text-xl font-bold mb-2">4. Opt-In Requirement</h2>
      <p className="mb-4">
        You will only receive messages if you have provided express written
        or verbal consent. You may opt out at any time.
      </p>

      <h2 className="text-xl font-bold mb-2">5. Carriers</h2>
      <p className="mb-4">
        Supported on all major US carriers. Carriers are not liable for
        delayed or undelivered messages.
      </p>

      <h2 className="text-xl font-bold mb-2">6. Privacy Policy</h2>
      <p className="mb-4">
        For more information on how we handle your information, please see
        our{" "}
        <Link href={"/privacy-policy"} className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default Terms;
