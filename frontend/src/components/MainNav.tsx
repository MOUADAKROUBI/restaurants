import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();
  

  return (
    <span className="flex space-x-2 items-center">
      {(isAuthenticated || sessionStorage.getItem('userId')) ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="default"
          className="font-bold hover:opacity-80"
          onClick={async () => await loginWithPopup()}
        >
          Sign In / Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
