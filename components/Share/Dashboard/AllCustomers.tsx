"use client";
import { deleteUser, getAllUsers } from "@/actions/customer.action";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect, useState } from "react";

function AllCustomers() {
  const [data, action] = useActionState(deleteUser, {
    message: "",
  });
  const [links, setLinks] = useState([]);
  const [users, setUsers] = useState<any>();
  useEffect(() => {
    async function getUsers() {
      const data = await getAllUsers(
        "http://localhost:8000/api/dashboard/all-users?page=1",
      );
      setUsers(data);
      setLinks(data.meta.links);
    }
    getUsers();
  }, []);
  return (
    <div className="max-w-6xl w-full mx-auto flex border rounded-md flex-col">
      <div className="border-b p-4 w-full">
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
            {users?.data.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.phone_number}</TableCell>
                <TableCell>
                  <form action={action}>
                    <Input
                      type="number"
                      defaultValue={user.id}
                      name="id"
                      className="hidden"
                    />
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant={"destructive"}>Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete user</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete {user.name}?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <Button type="submit" variant="destructive">
                            Delete
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </form>
                </TableCell>
                <TableCell>
                  <Button variant="secondary">Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-full flex justify-center items-center gap-2 p-4">
        {links.map((link: any) => (
          <Button
            variant={link.active ? "default" : "outline"}
            onClick={() =>
              setLinks(
                link.url
                  ? link.url
                  : `http://localhost:8000/api/dashboard/all-users?page=${users.current_page}`,
              )
            }
            key={link.label}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}

export default AllCustomers;
