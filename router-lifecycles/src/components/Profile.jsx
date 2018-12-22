import React from "react";
import { Link} from "react-router-dom";

const Profile = props => {

  const redir = ()=>{
    return (
      props.history.push('/')
      // <Redirect to='/'/> we could use this to redirect
    )
  }
  return (
    <div>
      <Link to={{
        pathname:`${props.match.url}/posts`
      }}> Take me to /profiles/posts </Link>

      {redir()}
      
    </div>
  );
};
export default Profile;
