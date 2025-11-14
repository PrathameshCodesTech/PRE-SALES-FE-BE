import { useState } from "react";

export default function PartnerIdentityForm() {
  const [formData, setFormData] = useState({
    partnerId: "",
    firstName: "",
    lastName: "",
    parentAgent: "",
    agentType: "",
    emailId: "",
    mobileNumber: "",
    address: "",
    password: "",
    panNumber: "",
    gstIn: "",
    companyName: "",
    commission: "",
    reraNumber: "",
    updateDate: "",
  });

  const updateForm = (key, val) =>
    setFormData((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    console.log("Identity Data:", formData);
    alert("Channel Partner Identity saved! (Static)");
  };

  const handleCancel = () => {
    setFormData({
      partnerId: "",
      firstName: "",
      lastName: "",
      parentAgent: "",
      agentType: "",
      emailId: "",
      mobileNumber: "",
      address: "",
      password: "",
      panNumber: "",
      gstIn: "",
      companyName: "",
      commission: "",
      reraNumber: "",
      updateDate: "",
    });
  };

  return (
    <div className="form-container">
      {/* 3-Column Grid */}
      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Partner ID:</label>
          <input
            className="field-input"
            value={formData.partnerId}
            onChange={(e) => updateForm("partnerId", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">First Name:</label>
          <input
            className="field-input"
            value={formData.firstName}
            onChange={(e) => updateForm("firstName", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Last Name:</label>
          <input
            className="field-input"
            value={formData.lastName}
            onChange={(e) => updateForm("lastName", e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Parent Agent:</label>
          <select
            className="field-input"
            value={formData.parentAgent}
            onChange={(e) => updateForm("parentAgent", e.target.value)}
          >
            <option value="">Select</option>
            <option value="agent1">Agent 1</option>
            <option value="agent2">Agent 2</option>
          </select>
        </div>

        <div className="form-field">
          <label className="field-label">Agent Type:</label>
          <select
            className="field-input"
            value={formData.agentType}
            onChange={(e) => updateForm("agentType", e.target.value)}
          >
            <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="corporate">Corporate</option>
          </select>
        </div>

        <div className="form-field">
          <label className="field-label">Email ID:</label>
          <input
            className="field-input"
            type="email"
            value={formData.emailId}
            onChange={(e) => updateForm("emailId", e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Mobile Number:</label>
          <input
            className="field-input"
            value={formData.mobileNumber}
            onChange={(e) => updateForm("mobileNumber", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Address:</label>
          <input
            className="field-input"
            value={formData.address}
            onChange={(e) => updateForm("address", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Password:</label>
          <input
            className="field-input"
            type="password"
            value={formData.password}
            onChange={(e) => updateForm("password", e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">PAN Number:</label>
          <input
            className="field-input"
            value={formData.panNumber}
            onChange={(e) => updateForm("panNumber", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">GST IN:</label>
          <input
            className="field-input"
            value={formData.gstIn}
            onChange={(e) => updateForm("gstIn", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Company Name:</label>
          <input
            className="field-input"
            value={formData.companyName}
            onChange={(e) => updateForm("companyName", e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Commission:</label>
          <select
            className="field-input"
            value={formData.commission}
            onChange={(e) => updateForm("commission", e.target.value)}
          >
            <option value="">Select</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
          </select>
        </div>

        <div className="form-field">
          <label className="field-label">Rera Number:</label>
          <input
            className="field-input"
            value={formData.reraNumber}
            onChange={(e) => updateForm("reraNumber", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Update Date:</label>
          <input
            className="field-input"
            type="date"
            value={formData.updateDate}
            onChange={(e) => updateForm("updateDate", e.target.value)}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="form-actions">
        <button type="button" className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button type="button" className="btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}