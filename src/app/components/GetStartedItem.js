import Image from "next/image";

function GetStartedItem({ title, description, iconName }) {
  const iconMap = {
    applicationIcon: "/images/get-started-icons/application.svg",
    loanEducationIcon: "/images/get-started-icons/loan-education.svg",
    uploadDocumentIcon: "/images/get-started-icons/upload-documents.svg",
    peaceHand: "/images/get-started-icons/peaceHand.svg",
    reviewIcon: "/images/get-started-icons/review.svg",
  };

  const IconSrc = iconMap[iconName] || "/get-started-icons/application.svg";

  return (
    <div className="relative py-16 px-8 text-xl text-center bg-white rounded-lg shadow-lg">
      <div className="absolute top-[-32px] left-4 h-16 w-16 bg-[#f5bb54] flex items-center justify-center rounded-lg">
        <Image
          src={IconSrc}
          alt="get started item icon"
          width={24}
          height={24}
        />
      </div>
      <h3 className="text-xl font-bold text-left text-[#004e82] mt-4">
        {title}
      </h3>
      <p className="text-base text-left text-[#91959d] mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default GetStartedItem;
