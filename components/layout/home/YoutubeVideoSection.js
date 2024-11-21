"use client";
import Link from "next/link";
import React from "react";
export default function YoutubeVideo() {
  const videos = [
    {
      url: "https://www.youtube.com/embed/KBYSpR8N6pc?si=oFEfNhh-ywTkXe0u",
    },
    {
      url: "https://www.youtube.com/embed/oUxQ0KUU-eY?si=50u0IwMC6IYXkhxY",
    },
    {
      url: "https://www.youtube.com/embed/kXUJGVdLHC8?si=l9XfM8MRyaxy-AoO",
    },
  ];

  return (
    <section className="mb-10">
      <div className="text-center w-full lg:w-1/2 mx-auto">
        <h2 className="text-amber-600 text-2xl font-semibold">
          Most Popular Latest Videos From Our Youtube Channel
        </h2>
        <p className="text-gray-600 mt-2">
          Stay Ahead Of The Fashion Curve With Our YouTube Channel, Featuring
          Our Most Popular Videos. Explore Trendsetting Style Guides And
          Exclusive Behind-The-Scenes Content, Keeping You At The Forefront Of
          Fashion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4">
        {videos.map((video, index) => (
          <div key={index} className="relative group">
            <div className="w-full h-52 md:h-[17rem] rounded-lg overflow-hidden">
              <iframe
                src={video.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-80"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full mt-6">
        <Link
          target="_blank"
          href={"https://www.youtube.com/@riddhisumanfabricsz/videos"}
          className="text-sm rounded-full border border-amber-500 capitalize px-6 py-2 hover:shadow-lg hover:bg-amber-500 hover:text-white transition-all duration-300 ease-in-out"
        >
          VIEW MORE
        </Link>
      </div>
    </section>
  );
}
