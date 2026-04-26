"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function SearchInput() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search products"
      />
    </div>
  );
}

export default SearchInput;
