import { useState } from "react";
import Image from "next/image";
import { leadOrganizers, thirdYearOrganizers, secondYearOrganizers } from "./organizerData";

function LogoWall({
  items = [],
  direction = "horizontal",
  reverse = false,
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 15vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111"
}) {
  const [isPaused, setIsPaused] = useState(false);

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className="flex flex-col gap-4 mx-auto max-w-full p-[20px_10px]"
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor,
        "--color-bg-accent": bgAccentColor,
        "--animation-direction": reverse ? "-1" : "1", // Handles reverse properly
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)"
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
  className={[
    "flex-shrink-0",
    "flex",
    "items-center",
    "justify-around",
    "gap-[calc(var(--size)/14)]",
    "min-w-full",
    "flex-nowrap",
    "animate-scrollX",
    direction === "vertical" && "flex-col min-h-full animate-scrollY"
  ]
    .filter(Boolean)
    .join(" ")}
  style={{
    animationDirection: reverse ? "reverse" : "normal",
    animationPlayState: isPaused ? "paused" : "running"
  }}
>
  {items.concat(items).map((item, idx) => (
    <Image
      key={idx}
      src={item.imgUrl}
      alt={item.altText}
      className="bg-[var(--color-bg-accent)] rounded-md object-contain aspect-video h-72 w-72 p-0"
    />
  ))}
</div>

      </div>
    </article>
  );
}




// Prepare the data from organizerData.js
const allOrganizers = [
  ...leadOrganizers,
  ...thirdYearOrganizers,
  ...secondYearOrganizers
].map(org => ({
  imgUrl: org.image,
  altText: org.name
}));

const secondYear = [
  ...secondYearOrganizers,
].map(org => ({
  imgUrl: org.image,
  altText: org.name
}));

const thirdYear = [
  ...thirdYearOrganizers,
].map(org => ({
  imgUrl: org.image,
  altText: org.name
}));

// Use LogoWall with organizers
export default function OrganizersLogoWall() {
  return (
    <div>
    <LogoWall
      items={thirdYear}
      direction="horizontal"
      pauseOnHover={true}
      size="clamp(5rem, 1rem + 1vmin, 50rem)"
      duration="60s"
      bgColor="transparent"
      bgAccentColor="transparent"
    />
    <LogoWall
      items={secondYear}
      direction="horizontal"
      pauseOnHover={true}
      size="clamp(5rem, 30rem + 15vmin, 50rem)"
      duration="100s"
      bgColor="transparent"
      bgAccentColor="transparent"
    />
    </div>
  );
}
