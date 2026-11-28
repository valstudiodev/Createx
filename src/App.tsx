import { RouterProvider } from "react-router";
import router from "./app/routes/routes";
import { useInputDetection } from "./app/inputDetection/useInputDetection";
import { useState } from "react";
import GlobalLoader from "./shared/ui/GlobalLoader/GlobalLoader";
import AuthProvider from "./app/providers/AuthProvider";


function App(): React.JSX.Element {

  useInputDetection()

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoadingComplete = (): void => {
    setIsLoading(false);
  };

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <GlobalLoader
        isLoading={isLoading}
        color="#FF3F3A"
        size={120}
        duration={3000}
        overlay
        onComplete={handleLoadingComplete}
      />
    </AuthProvider>
  )
}

export default App;