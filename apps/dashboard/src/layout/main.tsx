import { ReactNode } from "react";

type Props = { children: ReactNode; title: string };

function Main({ children, title }: Props) {
  return (
    <main className="px-4 h-screen overflow-y-scroll flex-grow">
      <h2 className="text-3xl font-medium py-4 sticky top-0 bg-white">
        {title}
      </h2>
      {children}
    </main>
  );
}

export default Main;
