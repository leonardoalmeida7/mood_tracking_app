import iconDropDownArrow from "../../assets/images/icon-dropdown-arrow.svg";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.svg";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <img src={logo} alt="Logo" />
      <div className="d-flex gap-2">
        <img src={avatarPlaceholder} alt="User Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
        <img src={iconDropDownArrow} alt="Dropdown Arrow" />
      </div>
    </header>
  );
};
