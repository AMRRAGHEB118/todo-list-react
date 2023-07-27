import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Task() {
  const state = useParams();
  return <Outlet />;
}
