"use client";
import { storeProduct } from "@/actions/product.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PackagePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";

function InsertProductForm() {
  const [data, action] = useActionState(storeProduct, {
    data: "",
    status: false,
  });
  if (data.status) {
    console.log("data inserted successfully");
    const router = useRouter();
    router.refresh();
  }
  return (
    <form
      action={action}
      className="p-4 rounded-lg border w-full flex flex-col"
    >
      <div className="flex py-4 flex-col items-center gap-2">
        <PackagePlusIcon size={42} />
        <p className="font-bold text-xl md:text-2xl">Add New Product</p>
        <span className="text-sm text-muted-foreground font-normal">
          Register the primary information of new product
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[15px]" htmlFor="name">
            Product name
          </label>
          <Input type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[15px]" htmlFor="price">
            Product Price
          </label>
          <Input type="number" name="price" id="price" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[15px]" htmlFor="stock">
            Available in Stock
          </label>
          <Input type="number" name="stock" id="stock" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[15px]" htmlFor="man_date">
            Manufacturer Date
          </label>
          <Input type="date" name="man_date" id="man_date" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[15px]" htmlFor="expire_date">
            Expire Date
          </label>
          <Input type="date" name="expire_date" id="expire_date" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[15px]" htmlFor="brand">
            Brand
          </label>
          <Input type="text" name="brand" id="brand" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[15px]" htmlFor="category">
            Category
          </label>
          <Input type="text" name="category" id="category" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[15px]" htmlFor="description">
            Description
          </label>
          <textarea
            className="h-32 resize-none rounded-4xl focus:outline-0 border p-3 bg-input/30"
            name="description"
            id="description"
          />
        </div>
      </div>
      <Button className="mx-auto px-5" type="submit">
        Save
      </Button>
    </form>
  );
}

export default InsertProductForm;
