import React from "react";

const Spinner = () => (
  <div className="my-12 mx-auto w-16 aspect-square rounded-full bg-[radial-gradient(farthest-side,var(--color-brand-600)_94%,#0000)_top/10px_10px_no-repeat,conic-gradient(#0000_30%,var(--color-brand-600))] mask-[radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)] animate-spin"></div>
);

export default Spinner;
