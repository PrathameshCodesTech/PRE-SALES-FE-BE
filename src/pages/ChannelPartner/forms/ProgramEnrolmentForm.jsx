import { useState } from "react";

export default function ProgramEnrolmentForm() {
  const [formData, setFormData] = useState({
    partnerTier: "",
    programStartDate: "",
    programEndDate: "",
  });

  const updateForm = (key, val) =>
    setFormData((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    console.log("Program Enrolment Data:", formData);
    alert("Program Enrolment saved! (Static)");
  };

  const handleCancel = () => {
    setFormData({
      partnerTier: "",
      programStartDate: "",
      programEndDate: "",
    });
  };

  return (
    <div className="form-container">
      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Partner Tier:</label>
          <select
            className="field-input"
            value={formData.partnerTier}
            onChange={(e) => updateForm("partnerTier", e.target.value)}
          >
            <option value="">Select</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="bronze">Bronze</option>
          </select>
        </div>

        <div className="form-field">
          <label className="field-label">Program Start Date:</label>
          <input
            className="field-input"
            type="date"
            value={formData.programStartDate}
            onChange={(e) => updateForm("programStartDate", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Program End Date:</label>
          <input
            className="field-input"
            type="date"
            value={formData.programEndDate}
            onChange={(e) => updateForm("programEndDate", e.target.value)}
          />
        </div>
      </div>

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