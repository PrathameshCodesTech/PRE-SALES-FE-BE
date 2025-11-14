import { useState } from "react";

export default function ComplianceDocsForm() {
  const [formData, setFormData] = useState({
    regulatoryCompliance: false,
    businessLicense: null,
  });

  const updateForm = (key, val) =>
    setFormData((f) => ({ ...f, [key]: val }));

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    updateForm("businessLicense", file);
  };

  const handleSave = () => {
    console.log("Compliance Data:", formData);
    alert("Compliance and Documents saved! (Static)");
  };

  const handleCancel = () => {
    setFormData({
      regulatoryCompliance: false,
      businessLicense: null,
    });
  };

  return (
    <div className="form-container">
      <div className="form-section-note">
        <p>Regulatory adherence and required legal documents.</p>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Regulatory Compliance Approved</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={formData.regulatoryCompliance}
              onChange={(e) => updateForm("regulatoryCompliance", e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
          <small className="field-note">Confirm all regulatory requirements are met.</small>
        </div>

        <div className="form-field">
          <label className="field-label">Business License</label>
          <div className="file-upload-wrapper">
            <input
              type="file"
              id="business-license"
              className="file-input"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.png"
            />
            <label htmlFor="business-license" className="file-upload-btn">
              📎 Upload File
            </label>
            {formData.businessLicense && (
              <span className="file-name">{formData.businessLicense.name}</span>
            )}
          </div>
          <small className="field-note">Upload valid business license document.</small>
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