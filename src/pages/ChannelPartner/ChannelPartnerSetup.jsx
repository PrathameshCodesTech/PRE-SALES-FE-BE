import { useState } from "react";
import PartnerIdentityForm from "./forms/PartnerIdentityForm";
import ProgramEnrolmentForm from "./forms/ProgramEnrolmentForm";
import ProductAuthForm from "./forms/ProductAuthForm";
import LeadManagementForm from "./forms/LeadManagementForm";
import ComplianceDocsForm from "./forms/ComplianceDocsForm";
import OperationalSetupForm from "./forms/OperationalSetupForm";
import TargetScorecardForm from "./forms/TargetScorecardForm";
import SystemAuditForm from "./forms/SystemAuditForm";
import "./ChannelPartnerSetup.css";

// Reusable Section Wrapper Component
function SectionWrapper({ title, isOpen, onToggle, children }) {
  return (
    <div className="setup-section">
      <button
        type="button"
        className="section-header"
        onClick={onToggle}
      >
        <h3 className="section-title">{title}</h3>
        <span className={`chevron ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  );
}

export default function ChannelPartnerSetup() {
  const [openSections, setOpenSections] = useState({
    identity: true,
    program: false,
    product: false,
    leadMgmt: false,
    compliance: false,
    operational: false,
    target: false,
    audit: false,
  });

  const toggleSection = (key) => {
    setOpenSections((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <div className="channel-partner-setup-page">
      <div className="setup-container">
        <div className="page-header">
          <h1>Channel Partner Setup</h1>
          <p className="page-subtitle">Configure channel partner details and settings</p>
        </div>

        {/* Section 1: Channel Partner Identity */}
        <SectionWrapper
          title="Channel Partner Identity"
          isOpen={openSections.identity}
          onToggle={() => toggleSection("identity")}
        >
          <PartnerIdentityForm />
        </SectionWrapper>

        {/* Section 2: Program Enrolment */}
        <SectionWrapper
          title="Program Enrolment"
          isOpen={openSections.program}
          onToggle={() => toggleSection("program")}
        >
          <ProgramEnrolmentForm />
        </SectionWrapper>

        {/* Section 3: Product Authorization */}
        <SectionWrapper
          title="Product Authorization"
          isOpen={openSections.product}
          onToggle={() => toggleSection("product")}
        >
          <ProductAuthForm />
        </SectionWrapper>

        {/* Section 4: Lead Management */}
        <SectionWrapper
          title="Lead Management"
          isOpen={openSections.leadMgmt}
          onToggle={() => toggleSection("leadMgmt")}
        >
          <LeadManagementForm />
        </SectionWrapper>

        {/* Section 5: Compliance and Documents */}
        <SectionWrapper
          title="Compliance and Documents"
          isOpen={openSections.compliance}
          onToggle={() => toggleSection("compliance")}
        >
          <ComplianceDocsForm />
        </SectionWrapper>

        {/* Section 6: Operational Setup */}
        <SectionWrapper
          title="Operational Setup"
          isOpen={openSections.operational}
          onToggle={() => toggleSection("operational")}
        >
          <OperationalSetupForm />
        </SectionWrapper>

        {/* Section 7: Target & Scorecard */}
        <SectionWrapper
          title="Target & Scorecard"
          isOpen={openSections.target}
          onToggle={() => toggleSection("target")}
        >
          <TargetScorecardForm />
        </SectionWrapper>

        {/* Section 8: System Audit */}
        <SectionWrapper
          title="System Audit"
          isOpen={openSections.audit}
          onToggle={() => toggleSection("audit")}
        >
          <SystemAuditForm />
        </SectionWrapper>
      </div>
    </div>
  );
}