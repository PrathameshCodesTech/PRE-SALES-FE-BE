import { useState } from "react";

export default function TargetScorecardForm() {
  const [formData, setFormData] = useState({
    annualRevenue: "",
    q1Performance: "",
  });

  const updateForm = (key, val) =>
    setFormData((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    console.log("Target & Scorecard Data:", formData);
    alert("Target & Scorecard saved! (Static)");
  };

  const handleCancel = () => {
    setFormData({
      annualRevenue: "",
      q1Performance: "",
    });
  };

  return (
    <div className="form-container">
      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Annual Revenue Target (USD)</label>
          <input
            className="field-input"
            type="number"
            placeholder="500,000"
            value={formData.annualRevenue}
            onChange={(e) => updateForm("annualRevenue", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Q1 Performance</label>
          <input
            className="field-input"
            type="text"
            placeholder="Achieved 85%"
            value={formData.q1Performance}
            onChange={(e) => updateForm("q1Performance", e.target.value)}
            readOnly
            style={{ background: "#f3f4f6" }}
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