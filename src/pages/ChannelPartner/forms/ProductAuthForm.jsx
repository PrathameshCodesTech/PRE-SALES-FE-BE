import { useState } from "react";

export default function ProductAuthForm() {
  const [formData, setFormData] = useState({
    project1: false,
    project2: false,
    project3: false,
  });

  const updateForm = (key, val) =>
    setFormData((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    console.log("Product Authorization Data:", formData);
    alert("Product Authorization saved! (Static)");
  };

  const handleCancel = () => {
    setFormData({
      project1: false,
      project2: false,
      project3: false,
    });
  };

  return (
    <div className="form-container">
      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Project 1</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={formData.project1}
              onChange={(e) => updateForm("project1", e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="form-field">
          <label className="field-label">Project 2</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={formData.project2}
              onChange={(e) => updateForm("project2", e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="form-field">
          <label className="field-label">Project 3</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={formData.project3}
              onChange={(e) => updateForm("project3", e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
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