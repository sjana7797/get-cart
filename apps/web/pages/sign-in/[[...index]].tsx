import { SignIn } from "@clerk/nextjs";
import Authentication from "~/layouts/Authentication";

export default function Page() {
  return (
    <Authentication>
      <SignIn />
    </Authentication>
  );
}
