import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import React from "react";

function Page() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="max-w-[1600px] w-full flex flex-col items-center">
        <Navbar />
        <div className="w-full max-w-4xl p-6 mt-10 mb-10 text-white">
          <h1 className="text-3xl font-bold text-center mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-4">
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern our relationship with you in relation to this
            website.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-400 mb-4">
            By accessing or using our website, you agree to be bound by these
            Terms of Service and all applicable laws and regulations. If you do
            not agree with any of these terms, you are prohibited from using or
            accessing this site.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">2. Use License</h2>
          <p className="text-gray-400 mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on our website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">3. Limitations</h2>
          <p className="text-gray-400 mb-4">
            In no event shall we be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business
            interruption) arising out of the use or inability to use the
            materials on our website.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            4. Revisions and Errata
          </h2>
          <p className="text-gray-400 mb-4">
            The materials appearing on our website could include technical,
            typographical, or photographic errors. We do not warrant that any of
            the materials on our website are accurate, complete, or current.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">5. Governing Law</h2>
          <p className="text-gray-400 mb-4">
            Any claim relating to our website shall be governed by and
            interpreted in accordance with the laws of the Republic of Turkey,
            without regard to its conflict of law provisions. Any disputes
            arising from the use of this website shall be subject to the
            exclusive jurisdiction of the courts of Istanbul, Turkey.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            6. Changes to Terms
          </h2>
          <p className="text-gray-400 mb-4">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. By continuing to access or use our website
            after those revisions become effective, you agree to be bound by the
            revised terms.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
