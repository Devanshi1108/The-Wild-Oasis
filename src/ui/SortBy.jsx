import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SoryBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSelectedValue = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      value={currentSelectedValue}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SoryBy;
