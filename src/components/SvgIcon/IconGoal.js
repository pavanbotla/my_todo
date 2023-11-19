import React from "react";
import { SvgXml } from "react-native-svg";
export default function IconGoal() {
  const svgMarkup = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#FEF5D3"/>
<g clip-path="url(#clip0_2_101)">
<path d="M25 28.938V31H30V33H18V31H23V28.938C21.0667 28.6942 19.2888 27.7533 18 26.2917C16.7112 24.8302 16 22.9486 16 21V15H32V21C32 22.9486 31.2888 24.8302 30 26.2917C28.7112 27.7533 26.9333 28.6942 25 28.938ZM18 17V21C18 22.5913 18.6321 24.1174 19.7574 25.2426C20.8826 26.3679 22.4087 27 24 27C25.5913 27 27.1174 26.3679 28.2426 25.2426C29.3679 24.1174 30 22.5913 30 21V17H18ZM13 17H15V21H13V17ZM33 17H35V21H33V17Z" fill="#403100"/>
</g>
<defs>
<clipPath id="clip0_2_101">
<rect width="24" height="24" fill="white" transform="translate(12 12)"/>
</clipPath>
</defs>
</svg>
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;

  return <SvgImage />;
}