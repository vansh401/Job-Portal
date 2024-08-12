import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {

  const navigate=useNavigate();
  const jobId="sdhgjfasldyfaif"
  return (
    <div className="p-5 shadow-xl bg-white border border-gray-100 rounded-mg">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className=" rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className=" p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaWYMlsxD_hH16V6izW6xCStu2mWlnivcnA&s" />
          </Avatar>
        </Button>
        <div>
          <h1 className=" font-medium text-lg">Company Name</h1>
          <p className=" text-sm text-gray-500">India</p>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className=" text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis rerum
          culpa dolores praesentium consectetur temporibus quia eaque ipsam a
          voluptatem!
        </p>
      </div>

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

      <div className=" flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline">Details</Button>
        <Button className=' bg-[#7209b7] hover:bg-[#57088c]'>Save For Later</Button>
      </div>

    </div>
  );
};

export default Job;
