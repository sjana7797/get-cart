import { ReactNode } from "react";

type Props = { children: ReactNode; title: string; cta?: ReactNode };

function Main({ children, title, cta }: Props) {
  return (
    <main className="px-4 h-screen overflow-y-scroll flex-grow flex flex-col">
      <section className="flex justify-between items-center">
        <h2 className="text-3xl font-medium py-4 sticky top-0 bg-white">
          {title}
        </h2>
        {cta ? cta : <></>}
      </section>
      {children}
    </main>
  );
}

export default Main;
