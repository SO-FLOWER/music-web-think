import React, { Fragment, memo } from "react";
import SQDealNum from "@/components/deal-num";

export default memo(function App() {
  return (
    <Fragment>
      <div className="textName">
        <SQDealNum />
      </div>
    </Fragment>
  );
});
