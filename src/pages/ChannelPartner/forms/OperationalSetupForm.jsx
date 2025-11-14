import { useState } from "react";

export default function OperationalSetupForm() {
  const [formData, setFormData] = useState({
    onboardingStatus: "",
    supportContact: "",
    setupNotes: "",
  });

  const updateForm = (key, val) =>
    setFormData((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    console.log("Operational Setup Data:", formData);
    alert("Operational Setup saved! (Static)");
  };

  const handleCancel = () => {
    setFormData({
      onboardingStatus: "",
      supportContact: "",
      setupNotes: "",
    });
  };

  return (
    <div className="form-container">
      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Onboarding Status</label>
          <select
            className="field-input"
            value={formData.onboardingStatus}
            onChange={(e) => updateForm("onboardingStatus", e.target.value)}
          >
            <option value="">Select</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="form-field">
          <label className="field-label">Dedicated Support Contact</label>
          <input
            className="field-input"
            type="email"
            placeholder="support@acmesolutions.com"
            value={formData.supportContact}
            onChange={(e) => updateForm("supportContact", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Technical Setup Notes</label>
          <textarea
            className="field-input"
            rows="3"
            placeholder="Any special integrations or setup requirements."
            value={formData.setupNotes}
            onChange={(e) => updateForm("setupNotes", e.target.value)}
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