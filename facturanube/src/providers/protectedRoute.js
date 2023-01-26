import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProtectedRoute = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return (
    <div>hola {outlet}</div>
    
  );
};