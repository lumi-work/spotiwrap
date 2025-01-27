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
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-4">
            At Spotiwrap, we take your privacy seriously. This Privacy Policy
            explains how we handle your information when you use our services.
            Please read this policy carefully to understand our practices
            regarding your data.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            1. No Data Storage
          </h2>
          <p className="text-gray-400 mb-4">
            We do not store any personal or usage data. Spotiwrap operates by
            fetching data in real-time through the Spotify API, and this data is
            not saved, logged, or retained on our servers or systems. Once your
            session ends, the data is discarded.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            2. Spotify API Usage
          </h2>
          <p className="text-gray-400 mb-4">
            Spotiwrap uses the Spotify API to provide its services. When you
            connect your Spotify account, we access your data (such as
            playlists, tracks, and listening history) temporarily to generate
            your personalized wrap. This data is processed in real-time and is
            not stored. We do not have control over Spotify's data policies, so
            we encourage you to review{" "}
            <a
              href="https://www.spotify.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 underline"
            >
              Spotify's Privacy Policy
            </a>{" "}
            for more information.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            3. Cookies and Tracking
          </h2>
          <p className="text-gray-400 mb-4">
            Spotiwrap does not use cookies or any tracking technologies to
            collect or store information about your usage of the service.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">4. Data Security</h2>
          <p className="text-gray-400 mb-4">
            Since we do not store any data, there is no risk of data breaches or
            unauthorized access to your information. However, we recommend that
            you take necessary precautions when using third-party services like
            Spotify.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            5. Changes to This Policy
          </h2>
          <p className="text-gray-400 mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we encourage you to review this
            policy periodically to stay informed about how we are protecting
            your information.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">6. Contact Us</h2>
          <p className="text-gray-400 mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please feel free to contact us at{" "}
            <span className="text-green-500 underline">
              works.lumi@gmail.com
            </span>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
