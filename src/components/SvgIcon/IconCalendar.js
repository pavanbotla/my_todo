import React from "react";
import { SvgXml } from "react-native-svg";
export default function IconCalendar() {
  const svgMarkup = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="#4A3780" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 1.66666V4.99999" stroke="#4A3780" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66669 1.66666V4.99999" stroke="#4A3780" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 8.33334H17.5" stroke="#4A3780" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;

  return <SvgImage />;
}
