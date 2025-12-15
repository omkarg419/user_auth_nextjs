interface UserProfileProps {
  params: Promise<{ id: string }>; // params is a Promise
}
export default async function UserProfile({ params }: UserProfileProps) {
  const resolvedParams = await params; // Await the params Promise

  const userId = resolvedParams.id;
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  py-2">
      <div className=" flex flex-col justify-center items-center py-2 rounded-2xl p-10 bg-transparent opacity-100 space-y-4 shadow-amber-600  shadow-2xl ">
        <h1 className="text-2xl text-amber-500 font-bold text-center align-middle m-2.5 p-2">
          Profile
        </h1>
        <hr />
        <p className="text-amber-300">
          Welcome to your profile page!{"  "}
          <span className="text-amber-500 text-2xl">{userId}</span>
        </p>
      </div>
    </div>
  );
}
