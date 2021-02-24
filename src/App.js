import { useEffect, useState, useCallback, useMemo } from "react";
import GlobalStyle, { PaginnationAndDataSizeContainer } from "./globalStyle";
import useFetch from "./api/api";
import {
  Table,
  Search,
  Pagination,
  DataSizeSelection,
  AddLine,
  SelectedUser,
} from "./components/index";

function App() {
  const { loading, fetchData } = useFetch();
  const [state, setState] = useState([]);
  const [query, setQuery] = useState("");
  const [totalItems, setTotalItems] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [mutableData, setMutableData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const initialForm = useMemo(
    () => ({
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: {
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
      },
      description: "",
    }),
    []
  );
  const [form, setForm] = useState(initialForm);
  const [sorting, setSorting] = useState({ field: "id", order: "descending" });
  const searchableColumns = useMemo(
    () => ["firstName", "lastName", "email", "phone"],
    []
  );
  const ITEMS_PER_PAGE = 50;

  const onFetchData = useCallback(
    (value) => {
      fetchData(value)
        .then((response) => {
          setState(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            alert(error.message);
          }
        });
    },
    [fetchData]
  );

  const onSearchData = useCallback(() => {
    setMutableData(
      state.filter((row) =>
        searchableColumns.some(
          (column) =>
            row[column].toString().toLowerCase().indexOf(query.toLowerCase()) >
            -1
        )
      )
    );
    setCurrentPage(1);
  }, [query, searchableColumns, state]);

  const fitData = useMemo(() => {
    let fitMutableData = mutableData;

    setTotalItems(fitMutableData.length);

    if (sorting.field === "id") {
      fitMutableData = fitMutableData.sort((a, b) =>
        sorting.order === "ascending"
          ? a[sorting.field] - b[sorting.field]
          : b[sorting.field] - a[sorting.field]
      );
    } else {
      const reversed = sorting.order === "ascending" ? 1 : -1;
      fitMutableData = fitMutableData.sort(
        (a, b) =>
          reversed * a[sorting.field].toString().localeCompare(b[sorting.field])
      );
    }

    return fitMutableData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [sorting, mutableData, currentPage]);

  useEffect(() => {
    setMutableData(state);
    setCurrentPage(1);
  }, [state]);

  useEffect(() => {
    if (state.length) {
      setForm((prevState) => ({
        ...prevState,
        id: Math.max(...state.map((data) => data.id)) + 1,
      }));
    }
  }, [state]);
  return (
    <>
      <GlobalStyle />
      <Search
        onSearch={onSearchData}
        query={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <AddLine
        initialForm={initialForm}
        form={form}
        setForm={setForm}
        setState={setState}
      />
      <PaginnationAndDataSizeContainer>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <DataSizeSelection onFetchData={onFetchData} />
      </PaginnationAndDataSizeContainer>
      <Table
        setSelectedUser={setSelectedUser}
        onSorting={(field, order) => setSorting({ field, order })}
        data={fitData}
        loading={loading}
      />
      {selectedUser && <SelectedUser selectedUser={selectedUser} />}
    </>
  );
}

export default App;
