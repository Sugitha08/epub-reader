import React from "react";
import ReactEpubReader from "../../ReactReader/ReactReader";
import { useNavigate } from "react-router-dom";

function UserEpubReader() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/user/dash/explore");
  };
  return (
    <ReactEpubReader
      epubFile="https://react-reader.metabits.no/files/alice.epub"
      handleNav={handleNav}
    />
  );
}

export default UserEpubReader;
