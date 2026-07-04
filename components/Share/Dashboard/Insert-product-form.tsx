import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PackagePlusIcon } from "lucide-react";
import React from "react";

function InsertProductForm() {
  return (
    <form className="p-4 rounded-lg border w-full flex flex-col">
      <div className="flex py-4 flex-col items-center gap-2">
        <PackagePlusIcon size={42} />
        <p className="font-bold text-xl md:text-2xl">Add New Product</p>
        <span className="text-sm text-muted-foreground font-normal">
          Register the primary information of new product
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Product name</label>
          <Input type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="price">Product Price</label>
          <Input type="number" name="price" id="price" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="stock">Available in Stock</label>
          <Input type="number" name="stock" id="stock" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="man_date">Manufacturer Date</label>
          <Input type="date" name="man_date" id="man_date" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="expire_date">Expire Date</label>
          <Input type="date" name="expire_date" id="expire_date" />
        </div>
      </div>
      <Button className="ml-auto" type="submit">
        Next
      </Button>
    </form>
  );
}

export default InsertProductForm;
