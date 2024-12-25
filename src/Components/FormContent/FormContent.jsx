import React, { useState } from "react";
import { Info } from "lucide-react";
import "../../Styles/FormContent.css";

const BorrowerForm = () => {
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    numberOfUnits: "",
    propertyAddress: "",
    file: null,
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Borrower Company Info</h1>

        <div className="form-row">
          {/* Property Name Input */}
          <div className="form-group">
            <label className="form-label">
              Property Name
              <Info size={16} className="info-icon" />
            </label>
            <input
              type="text"
              placeholder="Property Name"
              className="form-input"
            />
          </div>

          {/* Property Type Dropdown */}
          <div className="form-group">
            <label className="form-label">Property Type</label>
            <select className="form-select">
              <option value="">Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          {/* Number of Units Dropdown */}
          <div className="form-group">
            <label className="form-label">Number of Units</label>
            <select className="form-select">
              <option value="">Number of Units</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51+">51+</option>
            </select>
          </div>
        </div>

        {/* Property Address */}
        <div className="form-group">
          <label className="form-label">Property Address</label>
          <textarea
            placeholder="Enter Borrower Name"
            className="form-textarea"
          />
        </div>

        {/* File Attachment */}
        <div className="form-group">
          <label className="form-label">File Attachment</label>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="file-drop-zone"
          >
            Browse or Drag & Drop to Attach a file
          </div>
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button type="button" className="btn btn-back">
            Back
          </button>
          <button type="submit" className="btn btn-continue">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BorrowerForm;
