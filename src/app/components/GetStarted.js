import GetStartedItem from "./GetStartedItem";

function GetStarted() {
  return (
    <div className="bg-white mb-16" id="getStarted">
      <div className="bg-[url('/images/getStartedBackground.png')] bg-[#2ca4f2] bg-center bg-no-repeat bg-cover px-[8%] pt-16 pb-40">
        <h2 className="text-white text-center text-3xl font-bold">
          We Can Help!
        </h2>
        <p className="text-white text-center text-lg mt-4">
          Take the stress out of buying a home by working with First Class Home
          Mortgage specialists. Learn which home loan options are right for you
          and how the mortgage process works. We guide you through each step.
        </p>
      </div>

      <div className="max-w-[1024px] mx-auto mt-[-96px] grid grid-cols-1 justify-center gap-4 lg:grid-cols-3">
        <GetStartedItem
          title="Home Purchases"
          description="Looking to buy your first home, First Class Home Mortgage has a variety of loans to help you find the perfect solution."
          iconName="applicationIcon"
        />

        <GetStartedItem
          title="Credit Problems?"
          description="We have mortgage loans to help you walk through all the options available to you."
          iconName="creditCardIcon"
        />

        <GetStartedItem
          title="Debt Consolidation"
          description="Tired of paying minimum payments on high-interest-rate credit cards? First Class Home Mortgage can help."
          iconName="consolidationIcon"
        />
      </div>
    </div>
  );
}

export default GetStarted;
