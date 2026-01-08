import { useState, useContext } from "react";

import iconDropDownArrow from "../../assets/images/icon-dropdown-arrow.svg";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.svg";
import { AuthContext } from "../../contexts/AuthContext";

import logo from "../../assets/images/logo.svg";
import { ConfigModal } from "../ConfigModal";


export const Header = () => {
  const [showMiniModal, setShowMiniModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleMiniModal = () => {
    setShowMiniModal(!showMiniModal);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const getImageSrc = () => {
    if (imageError || !user?.profileImage) {
      return avatarPlaceholder;
    }
    
    // Check if it's a URL path from the server
    if (user.profileImage.startsWith('/uploads/')) {
      return `https://moodtrackingapp-backend-production.up.railway.app/${user.profileImage}`;
    }
    
    // Legacy support: Check if it's base64 format
    const isValidBase64 = user.profileImage.startsWith('data:image/') && 
                          user.profileImage.includes('base64,') &&
                          user.profileImage.length > 50;
    
    return isValidBase64 ? user.profileImage : avatarPlaceholder;
  };

  return (
    <header className="d-flex justify-content-between">
      <img src={logo} alt="Logo" />
      <div
        className="d-flex gap-2"
        onClick={toggleMiniModal}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <img
          src={getImageSrc()}
          alt="User Avatar"
          style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover"}}
          onError={handleImageError}
        />
        <img src={iconDropDownArrow} alt="Dropdown Arrow" />
      </div>
      {showMiniModal && <ConfigModal />}
    </header>
  );
};
