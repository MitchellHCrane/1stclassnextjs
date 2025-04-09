import React from "react";
import TwoBtnCTA from "../components/TwoBtnCTA";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#004e82]">
          Build Your Future with First Class Home Mortgage
        </h1>

        <p className="text-lg md:text-xl">
          At <strong>First Class Home Mortgage</strong>, we empower loan
          officers to thrive with industry-best compensation, powerful
          technology, and unbeatable support — all backed by the most
          competitive mortgage rates available.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-[#2ca4f2]">
              Mentorship That Drives Success
            </h2>
            <p className="mt-2">
              Learn from the best — work directly with our CEO,{" "}
              <strong>Troy Warner</strong>, an award-winning loan officer.
              Discover proven strategies to close more deals, more efficiently.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-[#2ca4f2]">
              Maximize Your Earnings
            </h2>
            <p className="mt-2">
              Our flat-fee commission model means you keep more of what you earn
              — paired with industry-leading tools and a constantly growing
              network of lenders and products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-[#2ca4f2]">
              Total Support, Total Confidence
            </h2>
            <p className="mt-2">
              From 24/7 operations support to unique loan products and a
              dedicated corporate team, you&apos;ll have everything you need to
              take your borrowers from application to closing — fast.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-[#2ca4f2]">
              Build Your Network. Grow Your Business.
            </h2>
            <p className="mt-2">
              Join an engaged, high-performing community of loan originators and
              elevate your career with powerful connections, continuous
              learning, and shared success.
            </p>
          </div>
        </div>
      </div>
      <TwoBtnCTA
        title="We are Hiring Experienced Loan Officers"
        subtitle="Join our South Jordan office and thrive with a winning team, or make a referral and get rewarded – it’s that easy!"
        primaryButton={{ label: "Call 385-999-1871", href: "tel:3859991871" }}
        secondaryButton={{
          label: "Make a Referral",
          href: "https://referral.1stclasshomemortgage.com/",
          target: "_blank",
        }}
      />
    </div>
  );
}
