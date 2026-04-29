import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Image src="/loader.gif" alt="Loading..." height={100} width={100} />
    </div>
  );
}

export default Loading;
