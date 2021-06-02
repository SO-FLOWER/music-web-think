import React, { memo, useState } from "react";
import { data } from "@/common/data";

function SQDealNum() {
  const { itemss } = useState();
  const listData = (item, index) => {
    return (
      <div key={item.title}>
        <div>{item.title}</div>
        <div>{item.phone}</div>
        <div>{index}</div>
      </div>
    );
  };
  const el = <h1>你好</h1>;
  console.log(el);
  return (
    <div>
      {data.map((item, index) => {
        return listData(item, index);
      })}
      {el}
      <div className={(itemss === 0 ? "active" : "") + "itemstyel"}></div>
    </div>
  );
}
export default memo(SQDealNum);
