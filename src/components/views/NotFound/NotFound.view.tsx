import React from "react";
import { useNavigate } from "react-router";

const NotFoundView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      404
      <button onClick={() => navigate(-1)} type="button">
        go back
      </button>
    </div>
  );
};

export default NotFoundView;
