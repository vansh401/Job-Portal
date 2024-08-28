import React, { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfilePopup from "./UpdateProfilePopup";

const skills = ["HTML", "CSS", "JS", "React", "MongoDB", "NodeJs", "Express"];
const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className=" flex justify-between">
          <div className=" flex items-center gap-4">
            <Avatar className=" h-24 w-24">
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaWYMlsxD_hH16V6izW6xCStu2mWlnivcnA&s" />
            </Avatar>
            <div>
              <h1 className=" font-medium text-xl">name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                id molestias, quis quos hic aliquid?
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className=" text-right"
          >
            <Pen />
          </Button>
        </div>
        <div className=" my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>vansh@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>3456789823</span>
          </div>
        </div>

        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length != 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://youtube.com"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Vansh Verma
            </a>
          ) : (
            <span>N/A</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfilePopup open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
