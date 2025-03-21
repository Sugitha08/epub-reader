import React from "react";
import ReactEpubReader from "../../ReactReader/ReactReader";
import { useNavigate } from "react-router-dom";
// import Reader from "../../ReactReader/Reader";

function PubEpubReader() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/publisher/dashboard/library");
  };

  return (
    <ReactEpubReader
      epubFile="https://react-reader.metabits.no/files/alice.epub"
      handleNav={handleNav}
      role="publisher"
    />
  );
}

export default PubEpubReader;
