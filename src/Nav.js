// import React from  "react";
// import { Link } from "react-router-dom";

// const Header=()=>{
//     return(
//         <div className="Header">
//             <div className="logo">
//                 <h1>Music Land</h1>
//             </div>
//             <nav className="navigation">
//                 <ul>
//                 <Link to="/">Home</Link>
          
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//           <li>
//             <Link to="/login">User Login</Link>
//           </li>
                   
//                 </ul>

//             </nav>

//         </div>
//     );
// }
// export default Header;
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <h1>Music Land</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
