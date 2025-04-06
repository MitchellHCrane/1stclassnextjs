import MainCTA from "../components/MainCTA";
import MortgageCalc from "../components/MortgageCalc";

function LoanCalculator() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl text-[#004e82] mt-24">Loan Calculator</h2>
        <p className="mt-8">
          Get an estimate of your monthly mortgage payments.
        </p>

        <p className="">
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
