import React, { createContext, useContext, useMemo, useState } from "react";
import { AuthAPI } from "../api/endpoints";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [access, setAccess] = useState(() => localStorage.getItem("access"));
  const [refresh, setRefresh] = useState(() => localStorage.getItem("refresh"));
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isAuthed = !!access;

  const login = async ({ username, password }) => {
    const data = await AuthAPI.login(username, password);
    const a = data?.access;
    const r = data?.refresh;
    const u = data?.user;
    
    if (!a || !r) throw new Error("Invalid credentials or token payload");
    
    // Store tokens
    localStorage.setItem("access", a);
    localStorage.setItem("refresh", r);
    setAccess(a);
    setRefresh(r);

    // Store user data (already contains role from backend)
    if (u) {
      localStorage.setItem("user", JSON.stringify(u));
      setUser(u);
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    setAccess(null);
    setRefresh(null);
    setUser(null);
    window.location.href = "/login";
  };

  const value = useMemo(
    () => ({ access, refresh, user, isAuthed, login, logout }),
    [access, refresh, user, isAuthed]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);