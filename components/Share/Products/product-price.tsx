import React from "react";

function ProductPrice({ price }: { price: string }) {
  const [int, float] = price.split(".");
  return (
    <div className="text-xl">
      <span className="align-super text-xs">AFN</span>
      {int}
      <span className="align-super text-xs">.{float}</span>
    </div>
  );
}

export default ProductPrice;
