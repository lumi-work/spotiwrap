import React from "react";
import {
  Accordion,
  Tab,
  Trigger,
  Content,
} from "@/components/ui/accordion-items";

const Accordions = () => {
  return (
    <div className="max-w-3xl mx-auto p-10 bg-neutral-900 rounded-xl">
      <h1 className="flex items-center justify-center w-full text-white text-3xl mb-5 font-bold">
        F.A.Q
      </h1>
      <Accordion className="text-neutral-200">
        <Tab>
          <Trigger className="">What is Spotiwrap?</Trigger>
          <Content className="text-neutral-400">
            Spotiwrap App is a personalized platform created by Lumi.Work that
            allows you to explore your yearly music journey, highlighting your
            top artists, tracks, genres, and more.
          </Content>
        </Tab>
        <Tab>
          <Trigger>Is Spotify Wrapped App free?</Trigger>
          <Content className="text-neutral-400">
            Yes, Spotify Wrapped App is completely free to use. Simply connect
            your Spotify account and start exploring your personalized insights.
          </Content>
        </Tab>
        <Tab>
          <Trigger>Can I share my Wrapped results?</Trigger>
          <Content className="text-neutral-400">
            Absolutely! Spotify Wrapped App provides easy sharing options for
            social media platforms so you can showcase your music journey with
            friends and followers.
          </Content>
        </Tab>
        <Tab>
          <Trigger>Does Spotify Wrapped App store my data?</Trigger>
          <Content className="text-neutral-400">
            Your privacy is our priority. Spotify Wrapped App temporarily
            accesses your listening data to generate your summary, but we do not
            store or share your data with third parties.
          </Content>
        </Tab>
      </Accordion>
    </div>
  );
};

export default Accordions;
