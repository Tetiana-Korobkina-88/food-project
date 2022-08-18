import { useParams, useNavigate } from "react-router-dom";

function Movies() {
  const { title } = useParams();
  const navigate = useNavigate();
  // console.log(value);

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
