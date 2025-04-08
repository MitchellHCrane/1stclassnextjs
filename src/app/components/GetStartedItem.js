import {
  ArrowsPointingInIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  ArrowUpTrayIcon,
  HandRaisedIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

const iconMap = {
  applicationIcon: DocumentTextIcon,
  loanEducationIcon: AcademicCapIcon,
  uploadDocumentIcon: ArrowUpTrayIcon,
  peaceHand: HandRaisedIcon,
  reviewIcon: EyeIcon,
  consolidationIcon: ArrowsPointingInIcon,
  creditCardIcon: CreditCardIcon,
};

function GetStartedItem({ iconName, title, description }) {
  const Icon = iconMap[iconName] || DocumentTextIcon;

  return (
    <div className="relative p-4 lg:p-12 pt-12 lg:pt-20 text-center rounded-lg bg-white mx-[8%] mt-8 shadow-[0_8px_16px_rgba(145,149,157,0.3)]">
      <div className="absolute top-[-32px] left-4 h-16 w-16 bg-[#f5bb54] flex items-center justify-center rounded-md">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-left text-xl font-semibold mb-2">{title}</h3>
      <p className="text-left text-base">{description}</p>
    </div>
  );
}

export default GetStartedItem;
