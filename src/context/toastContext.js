import { useState, createContext, useContext } from "react";
import Toast from "../components/Toast";

let ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [toast_message, set_toast_message] = useState("");

  const show_hide_toast = (message) => {
    set_toast_message(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };
  return (
    <ToastContext.Provider value={{ show_hide_toast }}>
      <Toast open={open} toast_message={toast_message} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
