import { useState } from "react";

export default function LeadManagementForm() {
  const [formData, setFormData] = useState({
    enableLeadSharing: false,
    crmIntegration: "",
  });

  const updateForm = (key, val) =>
    setFormData((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    console.log("Lead Management Data:", formData);
    alert("Lead Management saved! (Static)");
  };

  const handleCancel = () => {
    setFormData({
      enableLeadSharing: false,
      crmIntegration: "",
    });
  };

  return (
    <div className="form-container">
      <div className="form-section-note">
        <p>How lead will be shared and managed</p>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Enable Lead Sharing</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={formData.enableLeadSharing}
              onChange={(e) => updateForm("enableLeadSharing", e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
          <small className="field-note">Allow lead to be shared directly with CRM.</small>
        </div>

        <div className="form-field">
          <label className="field-label">CRM Integration:</label>
          <select
            className="field-input"
            value={formData.crmIntegration}
            onChange={(e) => updateForm("crmIntegration", e.target.value)}
          >
            <option value="">Select</option>
            <option value="salesforce">Salesforce</option>
            <option value="hubspot">HubSpot</option>
            <option value="zoho">Zoho CRM</option>
          </select>
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