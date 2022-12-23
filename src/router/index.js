import { createBrowserRouter } from "react-router-dom";
import { Step1 } from "../components/Step1";
import { Step2 } from "../components/Step2";
import { Step3 } from "../components/Step3";
import { Result } from "../components/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Step1 />,
  },
  {
    path: "/step-2",
    element: <Step2 />,
  },
  {
    path: "/step-3",
    element: <Step3 />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);
