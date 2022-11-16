import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  const [dataType, setDataType] = useState("");

  console.log({ data });

  // Write code here.
  useEffect(() => {
    fetch(`https://swapi-new.herokuapp.com/api/${dataType}/`)
      .then((res) => res.json())
      .then((apiData) => setData(apiData));
  }, [setDataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
