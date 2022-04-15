import React from "react";
import { IUser } from "../../types";
import { ITableHeaders, Table } from "../Table";
interface IUserTableProps {
  data: IUser[];
  sortBy: keyof Omit<IUser, "picture">;
}

const UserTable: React.FC<IUserTableProps> = ({
  data,
  sortBy = "fullName",
}) => {
  const tableHeaders: ITableHeaders[] = [
    {
      name: "Nome",
      value: "fullName",
    },
    {
      name: "Gênero",
      value: "gender",
    },
    {
      name: "Data de Nascimento",
      value: "birthDate",
    },
    {
      name: "Ações",
      value: "actions",
    },
  ];

  function sortFn(a: IUser, b: IUser) {
    return a[sortBy] > b[sortBy] ? 1 : -1;
  }

  console.log("Reload userTable");
  return (
    <>{data && <Table data={data.sort(sortFn)} headers={tableHeaders} />}</>
  );
};

function areEqual(prevProps: IUserTableProps, nextProps: IUserTableProps) {
  if (prevProps.data.length === 0 && nextProps.data.length === 0) return true;

  return prevProps.data === nextProps.data;
}

export default React.memo(UserTable, areEqual);
