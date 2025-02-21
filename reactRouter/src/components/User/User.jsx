import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-gray-700 text-white p-4 flex justify-center items-center text-3xl">
      User:{userid}
    </div>
  );
};

export default User;
