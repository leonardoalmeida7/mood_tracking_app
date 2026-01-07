import { useContext, useState } from "react";

import iconSettings from "../../assets/images/icon-settings.svg";
import iconLogout from "../../assets/images/icon-logout.svg";

import { AuthContext } from "../../contexts/AuthContext";
import { UpdateProfileModal } from "../UpdateProfileModal";

import styles from "./styles.module.css";

export const ConfigModal = () => {
    const { logout, user } = useContext(AuthContext);
    const [isActive, setIsActive] = useState(false);
  return (
    <div className={`${styles.configModal}`}
    style={{
      
    }}
  >
    <div>
      <p style={{ fontWeight: "600", fontSize: "1.15rem", margin: "0" }}>
        {user?.name || "User"}
      </p>
      <p style={{ fontSize: "1rem" }}>{user?.email || "No email provided"}</p>
    </div>
    <hr />
    <div>
      <p
        className="d-flex gap-2"
        style={{ fontSize: "1rem", cursor: "pointer" }}
        onClick={() => setIsActive(!isActive)}
      >
        <span>
          <img src={iconSettings} alt="Settings Icon" />
        </span>
        Settings
      </p>
      <p
        className="d-flex gap-2"
        style={{ fontSize: "1rem", cursor: "pointer" }}
        onClick={logout}
      >
        <span>
          <img src={iconLogout} alt="Logout Icon" />
        </span>
        Logout
      </p>
    </div>
    {isActive && <UpdateProfileModal onClose={() => setIsActive(false)} />}
  </div>
  )
}

