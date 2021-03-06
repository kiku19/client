import React from "react";

const SvgHome = (props) => {
  return (
    <svg viewBox="0 0 15.3 15.15" {...props}>
      <path
        d="M0 7.79v-.33a1.4 1.4 0 0 1 .37-.66Q3.58 3.58 6.81.37a1.26 1.26 0 0 1 .48-.3A1.1 1.1 0 0 1 8.52.4l6.38 6.37.13.15a1.06 1.06 0 0 1 .27.72 1.14 1.14 0 0 1-1.11 1.17h-.91v4.78a1.47 1.47 0 0 1-.15.71 1.42 1.42 0 0 1-1.39.84H3.56a1.38 1.38 0 0 1-.92-.3 1.48 1.48 0 0 1-.59-1.25V8.78h-.9a1.09 1.09 0 0 1-1-.67A3.09 3.09 0 0 1 0 7.79ZM9.36 13v-2.07a1.71 1.71 0 0 0-3.42 0V13Z"
        // style={{
        //   fill: "#8e8e8e",
        // }}
        data-name="art board 1"
      />
    </svg>
  );
};

export default React.memo(SvgHome);
