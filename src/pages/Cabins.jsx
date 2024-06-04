import React, { useEffect, useState } from "react";
import CabinTable from "../feature/cabins/CabinTable";
import Button from "../ui/components/Button";
import CreateCabinForm from "../feature/cabins/CreateCabinForm";

const Cabins = () => {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className="flex flex-col flex-1 w-full">
      <Row type="horizontal">
        <h1 className="text-2xl p-2">All Cabins</h1>
        <p>filter / sort</p>
      </Row>
      <Row>
        <CabinTable />
        <div className="w-full flex justify-center items-center">
          <Button
            onClick={() => {
              setShowForm((show) => !show);
            }}
          >
            Add new Cabin
          </Button>
        </div>
        {showForm && <CreateCabinForm />}
      </Row>
    </div>
  );
};

export default Cabins;

const Row = ({ type = "vertical", className = "", children }) => {
  const baseClasses = "flex";
  const typeClasses =
    type === "horizontal" ? "justify-between items-center" : "flex-col gap-4";

  return (
    <div className={`${baseClasses} ${typeClasses} ${className}`}>
      {children}
    </div>
  );
};
