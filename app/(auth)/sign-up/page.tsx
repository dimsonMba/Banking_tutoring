import AuthForm from "@/components/AuthForm";
import React from "react";

const SignUp = (data: { email: string; password: string; ssn: string; firstName?: string | undefined; lastName?: string | undefined; address1?: string | undefined; city?: string | undefined; state?: string | undefined; postalCode?: string | undefined; dateOfBirth?: string | undefined; }) => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
