import { RouterProvider } from "react-router";
import router from "./app/routes/routes";
import { useInputDetection } from "./app/inputDetection/useInputDetection";
import GlobalLoader from "./shared/ui/GlobalLoader/GlobalLoader";
import { useState } from "react";


function App(): React.JSX.Element {

  useInputDetection()

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoadingComplete = (): void => {
    setIsLoading(false);
  };

  return (
    <>
      <RouterProvider router={router} />
      {/* <GlobalLoader
        isLoading={isLoading}
        color="#FF3F3A"
        size={120}
        duration={3000}
        overlay
        onComplete={handleLoadingComplete}
      /> */}
    </>
  )

}

export default App;