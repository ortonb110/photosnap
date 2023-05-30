import React from "react";

export default function Hero() {
  return (
    <section>
      <div>
        <h1>create and share your phot stories</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <button>get an invite</button>
      </div>
      <div>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcset={require('../assets/home/desktop/create-and-share.jpg')}
          />
          <source media="(min-width: 768px)" srcset={require('../assets/home/tablet/create-and-share.jpg')} />
          <img
            src={require('../assets/home/mobile/create-and-share.jpg')}
            alt="Create and Share       "
          />
        </picture>
      </div>
    </section>
  );
}
