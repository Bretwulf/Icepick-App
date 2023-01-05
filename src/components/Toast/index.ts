import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type tTypeNotify = "sucess" | "error";

export const Toash = (message: string, type: tTypeNotify) => {
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

/* 
  variaveis a se colocar no root para estilizar os textos dos toash

  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;
*/
