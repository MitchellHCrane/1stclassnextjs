import {
  ArrowsPointingInIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    name: "Home Purchases",
    description:
      "Looking to buy your first home, First Class Home Mortgage has a variety of loans to help you find the perfect solution.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Credit Problems?",
    description:
      "We have mortgage loans to help you walk through all the options available to you.",
    icon: CreditCardIcon,
  },
  {
    name: "Debt Consolidation",
    description:
      "Tired of paying minimum payments on high-interest-rate credit cards? First Class Home Mortgage can help.",
    icon: ArrowsPointingInIcon,
  },
];

export default function GetStarted() {
  return (
    <div
      id="getStarted"
      className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-[#004e82] sm:text-4xl">
            We can help!
          </h2>
          <p className="mt-8 text-pretty text-xl font-medium text-gray-600">
            Take the stress out of buying a home by working with First Class
            Home Mortgage specialists. Learn which home loan options are right
            for you and how the mortgage process works. We guide you through
            each step.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-4">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                aria-hidden="true"
                className="h-10 w-10 flex-none text-[#004e82]"
              />
              <div className="">
                <h3 className="font-semibold text-2xl text-[#004e82]">
                  {card.name}
                </h3>
                <p className="mt-2 text-gray-500">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
