import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/Cars/operation.js";
import ListSection from "../components/ListSection/ListSection.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <ListSection />
    </div>
  );
};

export default CatalogPage;
