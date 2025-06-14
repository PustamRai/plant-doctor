"use client";

import { useUser } from "@clerk/nextjs";

const ProfilePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }

  //   const userObj = user;
  //   console.log("clerk user obj: ", userObj);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>Hello {user.firstName}, welcome to Plant Doctor</div>
    </div>
  );
};

export default ProfilePage;
