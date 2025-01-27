import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline-items";

export function TimelineOverview() {
  const data = [
    {
      title: "Dec 1, 2024",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-4">
            Project initialized. Basic structure and planning for development
            were set up.
          </p>
        </div>
      ),
    },
    {
      title: "Dec 8, 2024",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Integrated Spotify API to fetch user data and playlist information.
            Basic API setup completed.
          </p>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Implemented user authentication and authorization flow. Users can
            now securely log in.
          </p>
        </div>
      ),
    },
    {
      title: "Dec 15, 2024",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Designed and developed the user interface. Basic components and
            pages were created.
          </p>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Added functionality to display users top tracks and artists.
          </p>
        </div>
      ),
    },
    {
      title: "Dec 22, 2024",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Improved error handling and user feedback mechanisms. Enhanced
            overall stability and user experience.
          </p>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Optimized API request performance, reducing load times
            significantly.
          </p>
        </div>
      ),
    },
    {
      title: "Dec 29, 2024",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Added support for custom playlists and user-defined filters. Users
            can now create personalized playlists.
          </p>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Fixed various bugs and improved the overall stability of the
            application.
          </p>
        </div>
      ),
    },
    {
      title: "Jan 5, 2025",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Added new features and enhancements based on user feedback.
          </p>
          <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-lg font-normal mb-8">
            Finalized the project and prepared it for public release.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
}
