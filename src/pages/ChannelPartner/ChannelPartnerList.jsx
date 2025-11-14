import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./ChannelPartnerList.css";

function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export default function ChannelPartnerList() {
  const navigate = useNavigate();

  // Static dummy data
  const [allPartners] = useState([
    {
      id: 1,
      partnerId: "CP001",
      partnerName: "John Doe",
      email: "john@example.com",
      mobile: "9876543210",
      agentType: "Individual",
      tier: "Gold",
      status: "Active",
      projects: "3",
      createdDate: "2025-01-10",
    },
    {
      id: 2,
      partnerId: "CP002",
      partnerName: "Jane Smith",
      email: "jane@example.com",
      mobile: "9876543211",
      agentType: "Corporate",
      tier: "Silver",
      status: "Active",
      projects: "5",
      createdDate: "2025-02-15",
    },
    {
      id: 3,
      partnerId: "CP003",
      partnerName: "Bob Johnson",
      email: "bob@example.com",
      mobile: "9876543212",
      agentType: "Individual",
      tier: "Bronze",
      status: "Inactive",
      projects: "1",
      createdDate: "2025-03-20",
    },
  ]);

  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Filter data based on search
  const filteredData = useMemo(() => {
    return allPartners.filter(
      (partner) =>
        partner.partnerName.toLowerCase().includes(q.toLowerCase()) ||
        partner.partnerId.toLowerCase().includes(q.toLowerCase()) ||
        partner.email.toLowerCase().includes(q.toLowerCase()) ||
        partner.mobile.includes(q)
    );
  }, [allPartners, q]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const debouncedSearch = useMemo(
    () => debounce((val) => setQ(val), 350),
    []
  );

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this partner?")) {
      console.log("Delete partner:", id);
      alert("Delete functionality coming soon!");
    }
  };

  const handleAdd = () => {
    navigate("/channel-partner-setup?open=identity");
  };

  const getStatusBadgeClass = (status) => {
    return status === "Active" ? "badge-active" : "badge-inactive";
  };

  const getTierBadgeClass = (tier) => {
    if (tier === "Gold") return "badge-gold";
    if (tier === "Silver") return "badge-silver";
    return "badge-bronze";
  };

  return (
    <div className="partner-list-page">
      <div className="partner-list-container">
        {/* Header */}
        <div className="list-header">
          <div className="search-section">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search partners..."
                onChange={(e) => debouncedSearch(e.target.value)}
                className="search-input"
              />
            </div>

            <button className="btn-add" onClick={handleAdd}>
              Add Partner
            </button>
          </div>

          <div className="pagination-info">
            {filteredData.length > 0 ? (
              <>
                {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of{" "}
                {filteredData.length}
              </>
            ) : (
              "No results"
            )}
            <button
              className="pagination-btn"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ❮
            </button>
            <button
              className="pagination-btn"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
            >
              ❯
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-state">Loading...</div>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: "120px" }}>Actions</th>
                  <th>Partner ID</th>
                  <th>Partner Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Agent Type</th>
                  <th>Tier</th>
                  <th>Status</th>
                  <th>Projects</th>
                  <th>Created Date</th>
                </tr>
              </thead>
              <tbody>
                {currentData.length > 0 ? (
                  currentData.map((partner) => (
                    <tr key={partner.id}>
                      <td className="row-actions">
                        <button
                          title="View"
                          className="action-btn view-btn"
                          onClick={() =>
                            alert("View functionality coming soon!")
                          }
                        >
                          👁️
                        </button>
                        <button
                          title="Edit"
                          className="action-btn edit-btn"
                          onClick={() =>
                            navigate("/channel-partner-setup?open=identity")
                          }
                        >
                          ✏️
                        </button>
                        <button
                          title="Delete"
                          className="action-btn delete-btn"
                          onClick={() => handleDelete(partner.id)}
                        >
                          🗑️
                        </button>
                      </td>
                      <td>{partner.partnerId}</td>
                      <td className="partner-name">{partner.partnerName}</td>
                      <td className="email-cell">{partner.email}</td>
                      <td>{partner.mobile}</td>
                      <td>{partner.agentType}</td>
                      <td>
                        <span
                          className={`tier-badge ${getTierBadgeClass(
                            partner.tier
                          )}`}
                        >
                          {partner.tier}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`status-badge ${getStatusBadgeClass(
                            partner.status
                          )}`}
                        >
                          {partner.status}
                        </span>
                      </td>
                      <td>{partner.projects}</td>
                      <td>{partner.createdDate}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="empty-state">
                      No partners found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}