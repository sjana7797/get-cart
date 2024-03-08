import Image from "next/image";
import { ReactNode } from "react";
import loginSvg from "~/assets/svg/12085707_20944201.svg";

type Props = {
  children: ReactNode;
};

function Authentication({ children }: Props) {
  return (
    <div className="flex items-center w-screen h-screen p-5 bg-gradient-to-br from-slate-50 via-blue-200 to-blue-400 justify-between">
      <section className="shrink-0">{children}</section>
      <section className="max-w-md w-full h-full relative items-center md:flex hidden">
        <Image src={loginSvg} fill className="absolute" alt="Authentication" />
      </section>
    </div>
  );
}

export default Authentication;
