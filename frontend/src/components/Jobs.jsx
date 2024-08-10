import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className=" w-20%">
            <FilterCard />
          </div>
          {jobArray.map((item, index) => (
            <Job />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
