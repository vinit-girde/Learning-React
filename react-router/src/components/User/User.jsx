import { useParams } from "react-router-dom";

const User = () => {
  // Make sure to use same param name while defining the routes param id
  const { userid } = useParams();
  return (
    <div className="flex items-center justify-center text-center h-screen">
      User : {userid}
    </div>
  );
};

export default User;
