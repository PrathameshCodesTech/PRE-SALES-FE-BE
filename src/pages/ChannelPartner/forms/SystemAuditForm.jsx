import { useState, useEffect } from "react";

export default function SystemAuditForm() {
  const [formData, setFormData] = useState({
    lastModifiedBy: "Admin User",
    lastModifiedDate: "",
  });

  useEffect(() => {
    // Set current date/time
    const now = new Date().toISOString().slice(0, 16);
    setFormData((f) => ({ ...f, lastModifiedDate: now }));
  }, []);

  return (
    <div className="form-container">
      <div className="form-section-note">
        <p>Automatic audit trail for this record.</p>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Last Modified By</label>
          <input
            className="field-input"
            type="text"
            value={formData.lastModifiedBy}
            readOnly
            style={{ background: "#f3f4f6" }}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Last Modified Date</label>
          <input
            className="field-input"
            type="datetime-local"
            value={formData.lastModifiedDate}
            readOnly
            style={{ background: "#f3f4f6" }}
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-cancel" disabled>
          Cancel
        </button>
        <button type="button" className="btn-save" disabled>
          Save
        </button>
      </div>
    </div>
  );
}