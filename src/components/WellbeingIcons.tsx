import React from "react";

type IconProps = {
  className?: string;
};

const stroke = "#7F8F84";
const sage = "#B8C7B9";
const beige = "#DCCCBD";
const softBg = "#F7F4EF";

export const EmpatheticListeningIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M78 24C91 24 102 35 102 48C102 57 97 65 89 70C84 73 81 78 81 84V88"
      stroke={stroke}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M77 88C77 94 81 98 87 98"
      stroke={stroke}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M43 70C43 63 48 58 55 58C59 58 62 60 64 63C66 60 69 58 73 58C80 58 85 63 85 70C85 81 64 92 64 92C64 92 43 81 43 70Z"
      fill={beige}
      stroke={stroke}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M52 34C44 38 38 46 38 55C38 63 42 70 48 75"
      stroke={sage}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M47 30C36 36 28 47 28 60C28 69 32 78 39 84"
      stroke={sage}
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.9"
    />
  </svg>
);

export const EvidenceBasedGuidanceIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46 27C36 27 28 35 28 45C28 50 30 55 34 58C30 61 27 66 27 72C27 82 35 90 45 90H49"
      stroke={sage}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46 27C56 27 64 35 64 45V87"
      stroke={sage}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M82 27C92 27 100 35 100 45C100 50 98 55 94 58C98 61 101 66 101 72C101 82 93 90 83 90H79"
      stroke={beige}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M82 27C72 27 64 35 64 45V87"
      stroke={beige}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M81 64L95 70V86C95 97 87 104 81 107C74 104 67 97 67 86V70L81 64Z"
      fill={softBg}
      stroke={stroke}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M75 83L80 88L88 78"
      stroke={stroke}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PrivateSafeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64 18L102 31V57C102 83 85 100 64 110C43 100 26 83 26 57V31L64 18Z"
      stroke={sage}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <rect
      x="39"
      y="43"
      width="24"
      height="24"
      rx="6"
      fill={softBg}
      stroke={stroke}
      strokeWidth="3"
    />
    <path
      d="M45 43V37C45 30 50 25 57 25C64 25 69 30 69 37V43"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M52 58C52 55.2 54.2 53 57 53C59.8 53 62 55.2 62 58C62 59.8 61 61.3 59.5 62.1V65"
      stroke={stroke}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M56 59H80C85 59 89 63 89 68V79C89 84 85 88 80 88H70L61 96V88H56C51 88 47 84 47 79V68C47 63 51 59 56 59Z"
      fill={softBg}
      stroke={beige}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <circle cx="61" cy="73.5" r="2.5" fill={stroke} />
    <circle cx="69" cy="73.5" r="2.5" fill={stroke} />
    <circle cx="77" cy="73.5" r="2.5" fill={stroke} />
  </svg>
);

export const ExplainFeelingsIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="38" cy="43" r="13" stroke={stroke} strokeWidth="3" />
    <path
      d="M26 92V82C26 68 34 60 46 60C52 60 57 62 61 66"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M71 34H97C107 34 115 42 115 52C115 62 107 70 97 70H86L74 80L77 70H71C61 70 53 62 53 52C53 42 61 34 71 34Z"
      fill={softBg}
      stroke={sage}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M68 48H96" stroke={beige} strokeWidth="3" strokeLinecap="round" />
    <path d="M68 56H91" stroke={beige} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const ReceiveGuidanceIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="42"
      y="42"
      width="44"
      height="44"
      rx="10"
      fill={softBg}
      stroke={stroke}
      strokeWidth="3"
    />
    <rect x="52" y="52" width="24" height="24" rx="6" fill={sage} opacity="0.35" />
    <path d="M64 28V38" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <path d="M64 90V100" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <path d="M28 64H38" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <path d="M90 64H100" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <path d="M40 40L47 47" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <path d="M81 81L88 88" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <path d="M88 40L81 47" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <path d="M47 81L40 88" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <text
      x="64"
      y="69"
      textAnchor="middle"
      fontSize="15"
      fill={stroke}
      fontFamily="Arial, sans-serif"
      fontWeight="700"
    >
      AI
    </text>
  </svg>
);

export const GrowthProgressIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="34" cy="31" r="11" fill={beige} />
    <path
      d="M19 31H14M54 31H49M34 16V11M34 51V46M23 20L19 16M45 20L49 16"
      stroke={beige}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M20 104H108" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <rect x="56" y="74" width="10" height="30" rx="2" fill="#E8E1D7" />
    <rect x="72" y="63" width="10" height="41" rx="2" fill="#D8E1D6" />
    <rect x="88" y="50" width="10" height="54" rx="2" fill="#C5D3C4" />
    <circle cx="45" cy="56" r="8" fill={softBg} stroke={stroke} strokeWidth="3" />
    <path
      d="M40 92L34 104M53 77L47 104"
      stroke={stroke}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M39 93L50 76L64 68L62 86L75 84L91 63"
      stroke={stroke}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M91 63L102 52" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" />
    <path
      d="M96 52H102V58"
      stroke={stroke}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);