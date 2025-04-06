import MainCTA from "../components/MainCTA";

const testimonials = [
  {
    body: "Laborum quis quam. Dolorumuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod qui et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      // imageUrl: "",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "asdf",
      // imageUrl: "",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealasdfdsexander",
      // imageUrl: "",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quoduis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod qui quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "leslieasdfsdafdssdfdalexander",
      // imageUrl: "",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia.uis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod quiuis quam. Dolorum et ut quod qui Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesaslieasdfsdafdssdfdalexander",
      // imageUrl: "",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "leslieasdfsdafdssdfdalexafdsnder",
      // imageUrl: "",
    },
  },
  // More testimonials...
];

export default function Example() {
  return (
    <div className="bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold text-[#004e82]">Testimonials</h2>
          <p className="mt-2 text-4xl font-semibold text-gray-900 sm:text-4xl">
            We&apos;ve had the privilege of helping incredible individuals and
            families achieve their homeownership dreams.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
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
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
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
  );
}
