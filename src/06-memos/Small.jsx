import { memo } from "react";
import PropTypes from "prop-types";

export const Small = memo(({ value }) => {
  console.log(" me renderice");

  return <small className="text-red-400 text-lg">{value}</small>;
});


Small.propTypes = {
  value: PropTypes.any,
};