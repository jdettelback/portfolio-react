import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Navbar.css';

function Navbar({section, setSection}) {
  function handleClick(value) {
    console.log("Button was clicked for " + value);
    setSection(value);
  }

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <button value="Profile" onClick={() => handleClick("Profile")}>
              Profile
            </button>
          </li>
          <li>
            <button value="Contact" onClick={() => handleClick("Contact")}>
              Contact
            </button>
          </li>
          <li>
            <button value="Portfolio" onClick={() => handleClick("Portfolio")}>
              Portfolio
            </button>
          </li>
          <li>
            <button value="Resume" onClick={() => handleClick("Resume")}>
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

//  function Navbar2() {
//   return (
//     <>
//       <nav className="contact">
//         <h2>Jung Dettelback</h2>

//         <ul>
//           <div id="profile">
//             <img src="./images/jung1.png" alt="me" />
//             <p>
//               Programming is my fourth career. I have trained and worked as a
//               chemist, an attorney and a stay-at-home mother of 4. Now that my
//               children are grown, it's time for a new career!
//             </p>
//             <NavLink to="/profile">Profile</NavLink>
//           </div>
//           <li>
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//           <li>
//             <strong>Email:</strong>
//             <Link to="mailto:jdettelback@gmail.com">
//               jdettelback@gmail.com
//             </Link>
//           </li>
//           <li>
//             <Portfolio></Portfolio>
//           </li>
//           <NavLink to="#portfolio">Portfolio</NavLink>
//           <li>
//             <NavLink to="/resume">Resume</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }



export default Navbar;