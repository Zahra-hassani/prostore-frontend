"use client";
import { getAllUsers } from "@/actions/customer.action";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users2 } from "lucide-react";
import React, { useEffect, useState } from "react";

function AllCustomers() {
  const [users, setUsers] = useState<
    | {
        id: number;
        name: string;
        email: string;
        role: string;
        phone_number: string;
      }[]
    | null
  >(null);
  useEffect(() => {
    async function getUsers() {
      const data = await getAllUsers();
      setUsers(data.data);
    }
    getUsers();
  }, []);
  return (
    <div className="max-w-6xl w-full mx-auto flex border rounded-md flex-col">
      <div className="border-b p-5 w-full">
        <span className="text-sm text-muted-foreground flex items-center gap-2">
          <Users2 /> All Customers
        </span>
      </div>
      <div className="p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">ID</TableHead>
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold">Email</TableHead>
              <TableHead className="font-bold">Role</TableHead>
              <TableHead className="font-bold">Phone Number</TableHead>
              <TableHead className="font-bold">Delete</TableHead>
              <TableHead className="font-bold">Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.phone_number}</TableCell>
                <TableCell>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
                <TableCell>
                  <Button variant="secondary">Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AllCustomers;
