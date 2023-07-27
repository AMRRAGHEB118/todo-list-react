import { useParams } from "react-router-dom";

export default function Task() {
  const {state} = useParams();

  return (
    <>
      <h1>{state}</h1>
    </>
  );
}
