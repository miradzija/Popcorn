import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";

//import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="red" size={50} className="test" defaultRating={3} />
    <StarRating color="blue" size={50} />
    <Test /> */}
  </React.StrictMode>
);

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         color="green"
//         size={50}
//         maxRating={10}
//         onSetRating={setMovieRating}
//       />
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }
