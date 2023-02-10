import toast from "react-hot-toast";

export const successMessage = (msg) => {
  toast.success(msg, { position: "top-right" });
};

export const errorMessage = (msg) => {
  toast.error(msg, { position: "top-right" });
};
