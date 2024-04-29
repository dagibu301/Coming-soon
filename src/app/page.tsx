// Libs
import Image from "next/image";
import Squares from "../../public/assets/img/squares.gif";

export default function Home() {
  return (
    <main className="main">
      <div className="landing min-h-screen flex flex-col items-center justify-center">
        <Image src={Squares} width={99} height={99} alt="Manifest logo" className="mb-12"/>
        <h1 className="font-aeonik text-[34px] text-white font-bold mb-3">
          endless commerce
        </h1>
        <p className="font-aeonik text-white text-[15px] text-center mb-28">
          A modular, AI-powered commerceOS.<br/> Designed for brand operators, by
          brand operators.
        </p>
      </div>
    </main>
  );
}
