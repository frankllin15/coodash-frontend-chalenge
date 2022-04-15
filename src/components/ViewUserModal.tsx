import React, { useState } from "react";
import { IUser } from "../types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";

interface IProps {
  user: IUser;
}

export const ViewUserModal: React.FC<IProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleToogle = () => {
    setOpen(!open);
  };

  console.log("modal", user);

  return (
    <AlertDialog open={open} onOpenChange={handleToogle}>
      <AlertDialogTrigger>Ver</AlertDialogTrigger>

      <AlertDialogContent>
        <button
          onClick={handleToogle}
          className="w-6 h-6 rounded-full absolute  top-0 right-0"
        >
          x
        </button>
        <img
          src={user.picture.large}
          className="w-16 h-16 sm:w-32 sm:h-32 rounded-full absolute top-[calc(-2rem)] left-[calc(50%-2rem)] sm:top-[calc(-4rem)] sm:left-[calc(50%-8rem/2)]"
        />
        {/* <AlertDialogTitle>Title</AlertDialogTitle> */}
        <p>Nome: {user.fullName}</p>
        <p>Naturalidade: {user.nat}</p>
        <p>Nome: {user.fullName}</p>
      </AlertDialogContent>
    </AlertDialog>
  );
};
