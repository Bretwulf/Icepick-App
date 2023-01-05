import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type tTypeNotify = "sucess" | "error";

export const Toast = (message: string, type: tTypeNotify) => {
  if (type === "sucess") {
    toast.success(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
      autoClose: 5000,
      icon: "🧊",
      className: "black-background",
    });
  } else if (type === "error") {
    toast.error(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
      autoClose: 5000,
      icon: "💧",
    });
  }
};
