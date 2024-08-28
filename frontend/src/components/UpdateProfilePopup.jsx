import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import useAuth from "@/context/auth";
import axios from "axios";
import '../css/updateProfilePopup.css'


const UpdateProfilePopup = ({ open, setOpen }) => {
  
  const [loading, setLoading] = useState(false);

  const { api, auth } = useAuth();
  const user = auth.user;

  // console.log(user)

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });
  // console.log(input);

  const getProfile = async () => {
    try {
      const res = await axios.get(`${api}/user/profile`, {
        headers: {
          Authorization: auth?.token,
        },
      });
      // console.log(res.data);
      setInput({
        fullname: res.data.user.fullname,
        email: res.data.user.email,
        phoneNumber: res.data.user.phoneNumber,
        bio: "...",
        skills: "...",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getProfile();
  }, [api, auth]);
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="fullname"
                  className=" col-span-3"
                  onChange={changeEventHandler}
                  value={input.fullname}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className=" col-span-3"
                  onChange={changeEventHandler}
                  value={input.email}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  type="number"
                  name="phoneNumber"
                  className=" col-span-3 no-spin-button" 
                  onChange={changeEventHandler}
                  value={input.phoneNumber}
                  
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  className=" col-span-3"
                  onChange={changeEventHandler}
                  value={input.bio}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  className=" col-span-3"
                  onChange={changeEventHandler}
                  value={input.skills}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  className=" col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  {" "}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait{" "}
                </Button>
              ) : (
                <Button type="submit" className=" w-full my-4">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfilePopup;
