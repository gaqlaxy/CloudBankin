import React from "react";
import "../../styles/Stepper.css";
import FormContent from "../FormContent/FormContent";

const Stepper = () => {
  return (
    <div className="stepper-container">
      <div className="stepper">
        {/* Step 1 */}
        <div className="step active">
          <div className="circle">1</div>
          <span className="label">Borrower Company Info</span>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="circle">2</div>
          <span className="label">Director Info</span>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="circle">3</div>
          <span className="label">Financial Info</span>
        </div>

        {/* Step 4 */}
        <div className="step">
          <div className="circle">4</div>
          <span className="label">Past Performance Details</span>
        </div>

        {/* Step 5 */}
        <div className="step">
          <div className="circle">5</div>
          <span className="label">Document Upload</span>
        </div>
      </div>

      <FormContent />
    </div>
  );
};

export default Stepper;

// import React from "react";
// import "../../styles/Stepper.css";

// const Stepper = () => {
//   return (
//     <div className="stepper-container">
//       <div className="stepper">
//         {/* Step 1 */}
//         <div className="step active">
//           <div className="circle">1</div>
//           <span className="label">Borrower Company Info</span>
//         </div>

//         {/* Line 1 */}
//         <div className="line"></div>

//         {/* Step 2 */}
//         <div className="step">
//           <div className="circle">2</div>
//           <span className="label">Director Info</span>
//         </div>

//         {/* Line 2 */}
//         <div className="line"></div>

//         {/* Step 3 */}
//         <div className="step">
//           <div className="circle">3</div>
//           <span className="label">Financial Info</span>
//         </div>

//         {/* Line 3 */}
//         <div className="line"></div>

//         {/* Step 4 */}
//         <div className="step">
//           <div className="circle">4</div>
//           <span className="label">Past Performance Details</span>
//         </div>

//         {/* Line 4 */}
//         <div className="line"></div>

//         {/* Step 5 */}
//         <div className="step">
//           <div className="circle">5</div>
//           <span className="label">Document Upload</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stepper;
