import MainCTA from "../components/MainCTA";
import Head from "next/head";

const testimonials = [
  {
    body: "We. Had a pleasant experience working with Linda Skehan on a second mortgage for our home. She took care of our questions and provided knowledgeable help.",
    author: {
      name: "Patricia H.",
      // handle: "",
      // imageUrl: "",
    },
  },
  {
    body: "I am a Realtor and Linda is my go to loan officer! Not only has she been fantastic to my clients, she has now helped me personally through the process of buying two homes. She goes the extra mile to help those she works with. She is a fantastic communicator and knows how to get the job done, no matter what it takes. I could not recommend her enough! I will always refer anyone and everyone to her for all things loan-related.",
    author: {
      name: "Camryn M.",
      // handle: "",
      // imageUrl: "",
    },
  },
  {
    body: "Phenomenal job! Kept me updated throughout the entire process. Was able to work with my schedule and close the loan quickly. Would definitely recommend and use again.",
    author: {
      name: "Ross U.",
      // handle: "",
      // imageUrl: "",
    },
  },
  {
    body: "What an incredible company. Offering various loan types and a variety of rates. This will be your best decision for your home loan needs.",
    author: {
      name: "Sariah K.",
      // handle: "",
      // imageUrl: "",
    },
  },
  {
    body: "We have purchased 2 homes through Troy. Troy is very knowledgeable and helps make the process easy. He is quick and very attentive. He answered all our questions as first time home buyers and helped us feel comfortable throughout the whole process! Thanks Troy!",
    author: {
      name: "Marisa W.",
      // handle: "",
      // imageUrl: "",
    },
  },
  {
    body: "Working with Kari was sooo easy. We did not think we were in a position to buy and Kari not only told us we were but she literally did EVERYTHING for us! Thank you so much Kari.",
    author: {
      name: "Rylee R.",
      // handle: "",
      // imageUrl: "",
    },
  },
  {
    body: "Alan Cooper was my broker for the two houses I bought and sold. He made the buying process smooth and as stress free as possible. I like to call Alan a magician because he can pull anything out of a hat and he will do anything you need to get the house you want. His service does not stop after you sign the paperwork, you can rely on Alan for support even after closing. I highly recommend Alan, his knowledge and experience matched with the time he invests in his customers is impeccable.",
    author: {
      name: "Tonia M.",
      // handle: "",
      // imageUrl: "",
    },
  },
  {
    body: "I am very happy for the help and professionalism with which Raúl Sáez assisted us, without a doubt, I recommend him 100% to my friends, very hard-working and always concerned about us until the end of the process, thank you very much",
    author: {
      name: "Clara L.",
      // handle: "",
      // imageUrl: "",
    },
  },
  {
    body: "What a great experience from start to close! Thoughtful and caring! Would highly recommend!",
    author: {
      name: "Alan D.",
      // handle: "",
      // imageUrl: "",
    },
  },
  // {
  //   body: "",
  //   author: {
  //     name: "",
  // handle: "",
  //     // imageUrl: "",
  //   },
  // },
];

export default function Example() {
  return (
    <>
      <Head>
        <title>Testimonials | Hear From Our Happy Clients</title>
        <meta
          name="description"
          content="Read testimonials from our satisfied clients who achieved their homeownership dreams with First Class Home Mortgage."
        />
        <meta
          name="keywords"
          content="client testimonials, mortgage reviews, happy clients, homeownership success stories, First Class Home Mortgage"
        />
        <meta name="author" content="First Class Home Mortgage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Testimonials | Hear From Our Happy Clients"
        />
        <meta
          property="og:description"
          content="Read testimonials from our satisfied clients who achieved their homeownership dreams with First Class Home Mortgage."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://1stclasshomemortgage.com/testimonials"
        />
        <meta
          property="og:image"
          content="https://1stclasshomemortgage.com/testimonials-og-image.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Testimonials | Hear From Our Happy Clients",
              description:
                "Read testimonials from our satisfied clients who achieved their homeownership dreams with First Class Home Mortgage.",
              url: "https://1stclasshomemortgage.com/testimonials",
              author: {
                "@type": "Organization",
                name: "First Class Home Mortgage",
              },
              image:
                "https://1stclasshomemortgage.com/testimonials-og-image.jpg",
            }),
          }}
        />
      </Head>
      <div className="bg-white pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-semibold text-[#2ca4f2]">
              Testimonials
            </h2>
            <p className="mt-2 text-4xl font-semibold text-[#004e82] sm:text-4xl">
              We&apos;ve had the privilege of helping incredible individuals and
              families achieve their homeownership dreams.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      {/* <Image
                      alt=""
                      src={testimonial.author.imageUrl}
                      width={24}
                      height={24}
                      className="size-10 rounded-full bg-gray-50"
                    /> */}
                      <div>
                        <div className="font-semibold text-[#2ca4f2]">
                          {testimonial.author.name}
                        </div>
                        {/* <div className="text-gray-600">{`@${testimonial.author.handle}`}</div> */}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
        <MainCTA />
      </div>
    </>
  );
}
