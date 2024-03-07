import React from 'react';
import { useState } from "react";
import {  hand, lightning } from "./paths";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { getIndex, useFlubber } from "./use-flubber";


const paths = [lightning, hand, lightning];
const colors = [
  "#ffffff",
  "#0099ff",
  "#ffffff"
];

function Animation() {
     const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  React.useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });
    return () => animation.stop();
  });
 
  return (
    <svg width="200" height="200">
      <g transform="translate(10 10) scale(7 7)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
}

export default Animation

