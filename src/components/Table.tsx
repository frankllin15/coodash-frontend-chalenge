import { IUser } from "../types";
import { ViewUserModal } from "./ViewUserModal";

export interface ITableHeaders {
  name: string;
  value: keyof Omit<IUser, "picture"> | "actions";
}

interface TableProps {
  headers: ITableHeaders[];
  data: IUser[];
}
export const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          {headers.map((header, id) => (
            <th key={id}>{header.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.email}>
            {headers.map((header) =>
              header.value === "actions" ? (
                <td key={header.value}>
                  <ViewUserModal user={row} />
                </td>
              ) : (
                <td key={header.value}>{row[header.value]}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
