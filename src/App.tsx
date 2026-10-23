import { RouterProvider } from "react-router";
import router from "./app/routes/routes";
import { useInputDetection } from "./app/inputDetection/useInputDetection";


function App(): React.JSX.Element {

  useInputDetection()

  return <RouterProvider router={router} />
}

export default App;