"use client";
import { TypeAnimation } from "react-type-animation";

const NameAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        3000,
        'Jay Tat.',          // Next text to be typed.
      ]}
      wrapper="h1"          // The HTML tag to wrap the text in.
      cursor={true}         // Show cursor.
      repeat={0}     // Repeat the animation indefinitely.
      className="h1 text-accent" // Additional CSS classes.
      speed={{type: 'keyStrokeDelayInMs', value: 250}}
    />
  );
};

export default NameAnimation;
