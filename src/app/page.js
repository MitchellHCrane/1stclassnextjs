import GetStarted from "./components/GetStarted";
import HeroOne from "./components/HeroOne";
import MainCTA from "./components/MainCTA";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>First Class Home Mortgage | Hassle-Free Home Buying</title>
        <meta
          name="description"
          content="We take the hassle out of your home buying experience. Contact us today to find the right mortgage solution for you."
        />
        <meta
          name="keywords"
          content="mortgage applications, 5 star rated on  Zillow, Better rates than the Banks & Credit Unions, loan officers, home loans, hassle-free home buying, mortgage solutions, secure home loans"
        />
        <meta name="author" content="First Class Home Mortgage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="First Class Home Mortgage | Hassle-Free Home Buying"
        />
        <meta
          property="og:description"
          content="We take the hassle out of your home buying experience. Contact us today to find the right mortgage solution for you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://1stclasshomemortgage.com" />
        <meta
          property="og:image"
          content="https://1stclasshomemortgage.com/images/fchm-generic.jpg"
        />
        <meta rel="canonical" href="https://1stclasshomemortgage.com" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="First Class Home Mortgage | Hassle-Free Home Buying"
        />
        <meta
          name="twitter:description"
          content="We take the hassle out of your home buying experience. Contact us today to find the right mortgage solution for you."
        />
        <meta
          name="twitter:image"
          content="https://1stclasshomemortgage.com/images/fchm-generic.jpg"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta property="og:locale" content="en_US" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "First Class Home Mortgage | Hassle-Free Home Buying",
              description:
                "We take the hassle out of your home buying experience. Contact us today to find the right mortgage solution for you.",
              url: "https://1stclasshomemortgage.com",
              author: {
                "@type": "Organization",
                name: "First Class Home Mortgage",
              },
              image: "https://1stclasshomemortgage.com/images/fchm-generic.jpg",
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
      <div className="flex flex-col mx-auto bg-white">
        <HeroOne />
        <GetStarted />
        <MainCTA />
      </div>
    </>
  );
}
