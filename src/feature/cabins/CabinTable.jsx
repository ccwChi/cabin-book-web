import { useQuery } from "@tanstack/react-query";
import React from "react";

import CabinRow from "./CabinRow";
import { getCabins, deleteCabin } from "../../services/apiCabins";

const CabinTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return (
    <>
      <Table>
        <TableHeader>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {cabins &&
          cabins.map((cabin) => <CabinRow cabin={cabin} key={cabin.id} />)}
      </Table>
    </>
  );
};

export default CabinTable;

const Table = ({ children, ...props }) => (
  <div className="border border-gray-200 font-size-sm bg-gray-50 rounded-lg overflow-hidden">
    {children}
  </div>
);

const TableHeader = ({ children, ...props }) => (
  <header className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-6 items-center bg-gray-50 border-b border-gray-100 uppercase tracking-wide font-semibold text-gray-600 px-2 py-4">
    {children}
  </header>
);
