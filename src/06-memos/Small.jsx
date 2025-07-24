import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log(" me renderice");

  return <small className="text-red-400 text-lg">{value}</small>;
});
