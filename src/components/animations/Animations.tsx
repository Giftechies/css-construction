"use client";
import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("./SmoothScroll"), {
  ssr: false,
});

const SubTitle = dynamic(() => import("./SubTitleAnimations"), {
  ssr: false,
});
const RevealImage = dynamic(() => import("./RevealImages"), {
  ssr: false,
});
const ParallaxImage = dynamic(() => import("./ParallaxImage"), {
  ssr: false,
});
const FadeAnimations = dynamic(() => import("./FadeAnimations"), {
  ssr: false,
});
const AppearDown = dynamic(() => import("./AppearDown"), {
  ssr: false,
});
const SplitTextAnimations = dynamic(() => import("./SplitTextAnimations"), {
  ssr: false,
});
const VanillaTiltHover = dynamic(() => import("./VanillaTiltHover"), {
  ssr: false,
});
const ScrollToElement = dynamic(() => import("./ScrollToElement"), {
  ssr: false,
});
const ButtonHoverAnimation = dynamic(() => import("./ButtonHoverAnimation"), {
  ssr: false,
});
const HoverImage = dynamic(() => import("./HoverImage"), {
  ssr: false,
});
const VanillaTiltHoverCard = dynamic(() => import("./VanillaTiltHoverCard"), {
  ssr: false,
});
const ParallaxImageInner = dynamic(() => import("./ParallaxImageInner"), {
  ssr: false,
});

const Animations = () => {
  return (
    <>
      <SubTitle />
      <RevealImage />
      <ParallaxImage />
      <FadeAnimations />
      <AppearDown />
      <SplitTextAnimations />
      <VanillaTiltHover />
      <ScrollToElement />
      <ButtonHoverAnimation />
      <HoverImage />
      <VanillaTiltHoverCard />
      <ParallaxImageInner />
    </>
  );
};

export default Animations;
