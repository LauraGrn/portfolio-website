import React from "react";

const Line = React.forwardRef((props, ref) => {
  return (
    <svg width={3} height={3000} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        ref={ref}
        stroke="#FF6978"
        fill="none"
        fillRule="nonzero"
        d="M1 1h1v3000.642H1z"
      />
    </svg>
  );
});

export default Line;
