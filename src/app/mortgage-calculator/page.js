import MainCTA from "../components/MainCTA";
import MortgageCalc from "../components/MortgageCalc";
import Head from "next/head";

function LoanCalculator() {
  return (
    <>
      <Head>
        <title>Mortgage Calculator | Estimate Your Monthly Payments</title>
        <meta
          name="description"
          content="Use our mortgage calculator to estimate your monthly payments and find the best mortgage solution for your needs."
        />
        <meta
          name="keywords"
          content="mortgage calculator, loan calculator, monthly payments, mortgage estimates, home loans, mortgage solutions"
        />
        <meta name="author" content="First Class Home Mortgage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Mortgage Calculator | Estimate Your Monthly Payments"
        />
        <meta
          property="og:description"
          content="Use our mortgage calculator to estimate your monthly payments and find the best mortgage solution for your needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://1stclasshomemortgage.com/mortgage-calculator"
        />
        <meta
          property="og:image"
          content="https://1stclasshomemortgage.com/mortgage-calculator-og-image.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Mortgage Calculator | Estimate Your Monthly Payments",
              description:
                "Use our mortgage calculator to estimate your monthly payments and find the best mortgage solution for your needs.",
              url: "https://1stclasshomemortgage.com/mortgage-calculator",
              author: {
                "@type": "Organization",
                name: "First Class Home Mortgage",
              },
              image:
                "https://1stclasshomemortgage.com/mortgage-calculator-og-image.jpg",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://1stclasshomemortgage.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
      <div className="text-center px-8">
        <h2 className="text-4xl text-[#004e82] mt-24">Loan Calculator</h2>
        <p className="mt-8">
          Get an estimate of your monthly mortgage payments.
        </p>

        <p className="max-w-2xl mx-auto text-xs text-gray-400">
          * For a more accurate estimate, get in touch with us and we will help
          you find the best solution for your needs.
        </p>
      </div>
      <MortgageCalc />
      <MainCTA />
    </>
  );
}

export default LoanCalculator;
