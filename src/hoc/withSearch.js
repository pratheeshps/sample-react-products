import { useState } from "react";
export default function withSearch(WrappedComponent) {
  return function (props) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
    return (
      <>
        <div className="search-box">
          <input
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <WrappedComponent searchTerm={searchTerm} {...props} />
      </>
    );
  };
}
