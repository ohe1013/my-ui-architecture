import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";

export const SecurityNumber = () => {
  const navigate = useNavigate();
  return (
    <Layout title="SecurityNumber">
      <button onClick={() => navigate("/address")}></button>
    </Layout>
  );
};
