import { useState, useContext } from "react";
import { useRegister } from "../contexts/RegisterContext";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export const useFormSubmit = () => {
  const { email, password, profileImage, name, resetForm2 } = useRegister();
  const [errorMessage, setErrorMessage] = useState<{
    emailField?: string;
    passwordField?: string;
    nameField?: string;
  }>({});

  const { login, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const formSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    route: string
  ) => {
    event.preventDefault();

    if (email.length === 0) {
      setErrorMessage({
        emailField: "email is required.",
        passwordField: "",
      });
      return;
    }
    setErrorMessage({});
    if (password.length < 6) {
      setErrorMessage({
        emailField: "",
        passwordField: "password must be at least 6 characters long.",
      });
      return;
    }
    setErrorMessage({});

    if (route === "register") {
      navigate("/auth/register/onboarding");
      resetForm2();
      return;
    }

    try {
      const response = await api.post(`user/login`, {
        email,
        password,
      });
      login(response.data.token, response.data.user);
      toast.success(response.data.message);
    } catch (error: any) {
      console.error("Error during authentication:", error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  const formSubmitRegister = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (name.length < 3) {
      setErrorMessage({
        nameField: "Name must be at least 3 characters long",
      });
      return;
    }

    setErrorMessage({});

    const imageSize: string = profileImage
      ? `${(profileImage.size / 1024).toFixed(2)} KB`
      : "0 KB";

    type ImageType = "image/png" | "image/jpeg" | "image/jpg" | undefined | null;
    const imageType: ImageType = profileImage?.type as ImageType;

    if (imageSize && parseFloat(imageSize) > 250) {
      toast.error(
        "Profile image size exceeds 250KB. Please choose a smaller image."
      );
      return;
    }
    if (
      imageType !== "image/png" &&
      imageType !== "image/jpeg" &&
      imageType !== "image/jpg" &&
      imageType !== null &&
      imageType !== undefined
    ) {
      toast.error("Invalid image format. Please upload a PNG, JPEG, or JPG file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      const response = await api.post("user/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(response.data.message);
      login(response.data.token, response.data.user);
    } catch (error: any) {
      console.error("Error during registration:", error);
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  const formSubmitUpdate = async (
    event: React.FormEvent<HTMLFormElement>,
    onSuccess?: () => void
  ) => {
    event.preventDefault();
    if (name.length < 3) {
      setErrorMessage({
        nameField: "Name must be at least 3 characters long",
      });
      return;
    }

    setErrorMessage({});

    const imageSize: string = profileImage
      ? `${(profileImage.size / 1024).toFixed(2)} KB`
      : "0 KB";

    type ImageType = "image/png" | "image/jpeg" | "image/jpg" | undefined | null;
    const imageType: ImageType = profileImage?.type as ImageType;

    if (profileImage && parseFloat(imageSize) > 250) {
      toast.error(
        "Profile image size exceeds 250KB. Please choose a smaller image."
      );
      return;
    }
    if (
      profileImage &&
      imageType !== "image/png" &&
      imageType !== "image/jpeg" &&
      imageType !== "image/jpg" &&
      imageType !== null &&
      imageType !== undefined
    ) {
      toast.error("Invalid image format. Please upload a PNG, JPEG, or JPG file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      const token = localStorage.getItem('token');
      console.log("Token found:", !!token);
      console.log("Sending update request...");
      const response = await api.put("user/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      
      toast.success(response.data.message);
      console.log("Updated user data:", response.data.user); // Debug log
      updateUser(response.data.user);
      if (onSuccess) onSuccess();
    } catch (error: any) {
      console.error("Error during profile update:", error);
      toast.error(
        error.response?.data?.message ||
          "Profile update failed. Please try again."
      );
    }
  };

  return { formSubmit, formSubmitRegister, formSubmitUpdate, errorMessage, setErrorMessage };
};
