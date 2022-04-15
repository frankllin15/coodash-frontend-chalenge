import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getUsers, IGetUsersParams } from "../actions/query";
import { IUser } from "../types";
import { InputText } from "./InputText";
import { Pagination } from "./Pgination";
import UserTable from "./UserTable";
import { ViewUserModal } from "./ViewUserModal";

const TOTAL_PAGES = 100;

export const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<IUser[] | undefined>();
  const [page, setPage] = useState(1);
  const queryParams: IGetUsersParams = {
    page: page.toString(),
  };
  const { data, refetch } = useQuery("users", () => getUsers(queryParams), {
    refetchOnWindowFocus: false,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search) {
      const match = data?.results?.filter((user) => {
        return user.fullName.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredData(match);
    } else {
      setFilteredData(undefined);
    }
  }, [data, search]);

  useEffect(() => {
    refetch();
  }, [page]);
  console.log("data", data);

  return (
    <div className="mx-1 my-8 md:mx-12 flex flex-col">
      <h2 className="text-xl">Pesquise por informações dos clientes</h2>
      <InputText
        onChange={handleSearch}
        name="search"
        value={search}
        placeholder="Searching"
        type="text"
      />
      {data && (
        <UserTable sortBy="birthDate" data={filteredData || data?.results} />
      )}
      <Pagination page={page} setPage={setPage} total_pages={100} />
    </div>
  );
};
