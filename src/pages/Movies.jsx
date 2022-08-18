import { useParams, useNavigate, useLocation } from "react-router-dom";

function Movies() {
  const { title } = useParams();
  const navigate = useNavigate();
  const value2 = useLocation();

  console.log(value2);

  return (
    <>
      <h1>New movies {title}</h1>
      <button className="btn" onClick={() => navigate(-1)}>
        Go page back
      </button>
    </>
  );
}

export { Movies };
