import React from "react";

export default function Hero() {
  return (
    <section className="w-full grid auto-cols-auto grid-flow-col h-[65rem]">
      <div className="w-[61rem]">
        <h1>create and share your phot stories</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <button>get an invite</button>
      </div>
      <div className="w-full">
        <picture >
          <source
            media="(min-width: 1024px)"
            srcset={require('../assets/home/desktop/create-and-share.jpg')}
          />
          <source media="(min-width: 768px)" srcset={require('../assets/home/tablet/create-and-share.jpg')} />
          <img className="w-full object-cover h-[65rem]"
            src={require('../assets/home/mobile/create-and-share.jpg')}
            alt="Create and Share       "
          />
        </picture>
      </div>
    </section>
  );
}
