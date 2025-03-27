import * as React from "react";
const SvgMail = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="#fff=currenctColor"
    height="#fff=currenctColor"
    viewBox="0 0 100 100"
    {...props}
  >
    <defs>
      <clipPath id="mail_svg__a">
        <path d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#mail_svg__a)">
      <g
        fill="none"
        stroke="#000"
        strokeWidth={10}
        transform="translate(4.293 8.717)"
      >
        <path
          strokeLinecap="round"
          d="M2 45.616C2 62.092 2 70.33 7.119 75.449s13.356 5.115 29.833 5.115h17.475c16.476 0 24.715 0 29.833-5.119s5.119-13.357 5.119-29.833c0-4.132.081-5.561 0-8.738m-39.321-26.21H36.952c-16.477 0-24.715 0-29.833 5.119C4.265 18.636 3 22.464 2.443 28.14"
          data-name="Path 11"
        />
        <path
          strokeLinecap="round"
          d="m19.476 28.139 7.272 6.06m35.728 1.8c-8.024 6.687-12.036 10.03-16.782 10.03-2.837 0-5.411-1.195-8.738-3.585"
          data-name="Path 12"
        />
        <ellipse
          cx={13}
          cy={12.5}
          data-name="Ellipse 1"
          rx={13}
          ry={12.5}
          transform="translate(63 2.283)"
        />
      </g>
    </g>
  </svg>
);
export default SvgMail;
