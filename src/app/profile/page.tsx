"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function ProfilePage() {
  const router = useRouter();
  const Logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message || "Internal Server Error");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  py-2">
      <div className=" flex flex-col justify-center items-center py-2 rounded-2xl p-10 bg-transparent opacity-100 space-y-4 shadow-amber-600  shadow-2xl ">
        <h1 className="text-2xl text-amber-500 font-bold text-center align-middle m-2.5 p-2">
          Profile
        </h1>
        <hr />
        <p className="text-amber-300">Welcome to your profile page!</p>
      </div>

      <div className="mt-10">
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
          onClick={Logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
