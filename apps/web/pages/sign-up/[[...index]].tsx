import { SignUp } from "@clerk/nextjs";
import Authentication from "~/layouts/Authentication";

export default function Page() {
  return (
    <Authentication>
      <SignUp  />
    </Authentication>
  );
}
