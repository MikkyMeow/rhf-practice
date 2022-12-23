import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Header = () => <h1>Header</h1>;
const Step1 = () => <h2>Step 1</h2>;
const Step2 = () => <h2>Step 2</h2>;
const Step3 = () => <h2>Step 3</h2>;
const Result = () => <h2>Result</h2>;

const router = createBrowserRouter([
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

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
