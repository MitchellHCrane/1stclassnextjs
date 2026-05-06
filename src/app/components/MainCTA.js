export default function MainCTA() {
  const formatPhoneNumber = (phone) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  };

  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '3859991871';
  const formattedPhone = formatPhoneNumber(phoneNumber);

  return (
    <div className="bg-[#2ca4f2]">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to Buy a Home?
          </h2>
          <p className="text-lg text-white">
            Call now to speak with a mortgage expert.
          </p>
        </div>
        <div className="flex mt-6 lg:mt-0 items-center">
          <a
            href={`tel:${phoneNumber}`}
            className="rounded-md bg-[#004e82] px-4 py-3 text-lg font-semibold text-white hover:text-[#2ca4f2] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Call {formattedPhone}
          </a>
        </div>
      </div>
    </div>
  );
}
