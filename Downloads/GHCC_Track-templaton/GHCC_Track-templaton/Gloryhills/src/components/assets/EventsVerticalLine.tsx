import React from "react";

export default function EventsVerticalLine({
  className = "",
}: EventsVerticalLineProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 1 60" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.5" y1="8.69477e-08" x2="1.5" y2="60" stroke="#2AABEE" stroke-width="3"/></svg>
    </div>
  );
}

interface EventsVerticalLineProps {
  className?: string;
}
