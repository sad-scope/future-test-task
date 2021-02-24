import React, { useState } from "react";

import {
  TableForData,
  TableHeader,
  TableWhrapper,
  TableHeadersTr,
  TableHeadersTh,
  TableHeadersСellIcon,
  TableHeadersСellSpan,
  TableBody,
  TableBodyTd,
  TableBodyTr,
  LoaderIcon,
  WhrapperforScroll,
  LoaderWhrapper,
  TableCellWrapper,
} from "./Table.elements";
import { tableHeadersCellsObj } from "./Data";
function Table({ data, loading, onSorting, setSelectedUser }) {
  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("ascending");
  const onSortingChange = (field) => {
    const order =
      field === sortingField && sortingOrder === "ascending"
        ? "descending"
        : "ascending";

    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  };

  return (
    <TableWhrapper>
      <WhrapperforScroll>
        {loading && (
          <LoaderWhrapper>
            <LoaderIcon />
          </LoaderWhrapper>
        )}
        {!loading && data.length !== 0 && (
          <TableForData>
            <TableHeader>
              <TableHeadersTr>
                {tableHeadersCellsObj.map(
                  ({ name, field, sortable }, index) => (
                    <TableHeadersTh
                      key={index}
                      onClick={() => (sortable ? onSortingChange(field) : null)}
                    >
                      {" "}
                      <TableCellWrapper>
                        <TableHeadersСellSpan>{name}</TableHeadersСellSpan>
                        {sortingField && sortingField === field && (
                          <TableHeadersСellIcon
                            $sortingField={sortingField === field}
                            $sortingAscending={sortingOrder === "ascending"}
                          />
                        )}
                      </TableCellWrapper>
                    </TableHeadersTh>
                  )
                )}
              </TableHeadersTr>
            </TableHeader>

            <TableBody>
              {data.map((value, index) => (
                <TableBodyTr
                  onClick={() => setSelectedUser(value)}
                  key={index}
                  $evenIndex={index % 2 === 0 ? true : false}
                >
                  <TableBodyTd>{value.id}</TableBodyTd>
                  <TableBodyTd>{value.firstName}</TableBodyTd>
                  <TableBodyTd>{value.lastName}</TableBodyTd>
                  <TableBodyTd>{value.email}</TableBodyTd>
                  <TableBodyTd>{value.phone}</TableBodyTd>
                </TableBodyTr>
              ))}
            </TableBody>
          </TableForData>
        )}
      </WhrapperforScroll>
    </TableWhrapper>
  );
}

export default Table;
