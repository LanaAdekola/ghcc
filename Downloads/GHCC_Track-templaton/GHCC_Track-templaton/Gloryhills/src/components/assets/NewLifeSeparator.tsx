import React from "react";

export default function NewLifeSeparator({
  className = "",
}: NewLifeSeparatorProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 144 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-2.5" x2="144" y2="-2.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 144 5)" stroke="#2AABEE" stroke-width="5"/></svg>
    </div>
  );
}

interface NewLifeSeparatorProps {
  className?: string;
}