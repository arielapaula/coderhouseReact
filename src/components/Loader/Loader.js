import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loader = ({ loading }) => {
  return <>(
      {loading && <CircularProgress />})</>;
};

export default Loader;