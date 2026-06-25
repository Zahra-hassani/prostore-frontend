import { Badge } from "@/components/ui/badge";
import { LucideSquareChevronRight } from "lucide-react";
import React from "react";

function RecentOrders() {
  return (
    <div className="rounded-2xl flex flex-col border max-w-6xl w-full bg-white dark:bg-gray-800/65">
      <div className="p-4 flex w-full border-b">
        <span className="flex gap-1 text-gray-500">
          <LucideSquareChevronRight /> Recent Orders
        </span>
      </div>
      <div className="p-4">
        <table className="text-sm w-full">
          <thead>
            <tr className="border-b-2 text-left">
              <th className="p-4">Product Name</th>
              <th className="p-4">Brand</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Status</th>
              <th className="p-4">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Samsung Galaxy S22 Ultra</td>
              <td className="p-4">Samsung</td>
              <td className="p-4">4</td>
              <td className="p-4">
                <Badge
                  className="bg-amber-100 text-amber-600"
                  variant="destructive"
                >
                  Shiped
                </Badge>
              </td>
              <td className="p-4">160000</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Apple Loptop</td>
              <td className="p-4">Apple</td>
              <td className="p-4">1</td>
              <td className="p-4">
                <Badge
                  className="bg-green-100 text-green-600"
                  variant="destructive"
                >
                  Delivered
                </Badge>
              </td>
              <td className="p-4">20000</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Dell Laptop</td>
              <td className="p-4">Dell</td>
              <td className="p-4">1</td>
              <td className="p-4">
                <Badge
                  className="bg-green-100 text-green-600"
                  variant="destructive"
                >
                  Delivered
                </Badge>
              </td>
              <td className="p-4">15700</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Apple Desktop pro</td>
              <td className="p-4">Apple</td>
              <td className="p-4">1</td>
              <td className="p-4">
                <Badge
                  className="bg-blue-100 text-blue-600"
                  variant="destructive"
                >
                  Proccessing
                </Badge>
              </td>
              <td className="p-4">89230</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Samsung Galaxy S22 Ultra</td>
              <td className="p-4">Samsung</td>
              <td className="p-4">1</td>
              <td className="p-4">
                <Badge
                  className="bg-blue-100 text-blue-600"
                  variant="destructive"
                >
                  Proccessing
                </Badge>
              </td>
              <td className="p-4">40000</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Samsung Galaxy S25 Ultra</td>
              <td className="p-4">Samsung</td>
              <td className="p-4">2</td>
              <td className="p-4">
                <Badge
                  className="bg-green-100 text-green-600"
                  variant="destructive"
                >
                  Delivered
                </Badge>
              </td>
              <td className="p-4">128000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
