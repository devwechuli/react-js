import React from "react";
import { Link } from "react-router-dom";
import Card from "../hocs/Card";
import Auth from "../hocs/Auth";

const Profile = props => {
  const redir = () => {
    return props.history.push("/");
    // <Redirect to='/'/> we could use this to redirect
  };
  return (
    <div>
      <Auth>
        <Card>This content is under a higher order component</Card>

        <Link
          to={{
            pathname: `${props.match.url}/posts`
          }}
        >
          {" "}
          Take me to /profiles/posts{" "}
        </Link>

        {/* {redir()} */}
      </Auth>
    </div>
  );
};
export default Profile;
