import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className=" max-w-7xl mx-auto my-10 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className=" font-bold text-xl ">Frontend Developer</h1>
          <div className=" flex items-center gap-2 mt-4">
            <Badge className={" text-blue-700 font-bold"} variant={"ghost"}>
              12 positions
            </Badge>
            <Badge className={" text-[#f83002] font-bold"} variant={"ghost"}>
              Part Time
            </Badge>
            <Badge className={" text-[#7209b7] font-bold"} variant={"ghost"}>
              24LPA
            </Badge>
          </div>
        </div>

        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied ? " bg-gray-600" : " bg-[#7209b7] hover:bg-[#520685]"
          }`}
        >
          {isApplied ? "Already Applied !" : "Apply"}
        </Button>
      </div>
      <h1 className=" border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div>
        <h1 className=" font-bold my-1">Role :<span className=" pl-3 font-normal text-gray-800">Frontend Developer</span></h1>
        <h1 className=" font-bold my-1">Location :<span className=" pl-3 font-normal text-gray-800">Banglore</span></h1>
        <h1 className=" font-bold my-1">Description :<span className=" pl-3 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h1>
        <h1 className=" font-bold my-1">Experience :<span className=" pl-3 font-normal text-gray-800">2 yrs</span></h1>
        <h1 className=" font-bold my-1">Salary :<span className=" pl-3 font-normal text-gray-800">12 LPA</span></h1>
        <h1 className=" font-bold my-1">Total Applicants :<span className=" pl-3 font-normal text-gray-800">5</span></h1>
        <h1 className=" font-bold my-1">Posted Date :<span className=" pl-3 font-normal text-gray-800">12-08-2024</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
