import React from "react";
import "./ReactReader.css";
import { ReactReader } from "react-reader";

function ReactEpubReader({
  epubFile,
  location,
  locationChanged,
  header,
  getRendition,
  hLSlideOpen,
  notesSlideOpen,
  CustomMenu,
  HighlightDrawer,
  NotesDrawer,
}) {
  return (
    <>
      <div
        className={`reader-container  ${
          hLSlideOpen || notesSlideOpen ? "drawer-open" : ""
        } `}
      >
        {header && header}
        <ReactReader
          url={epubFile}
          location={location}
          locationChanged={locationChanged}
          epubOptions={{
            allowPopups: true, // Adds `allow-popups` to sandbox-attribute
            allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
            allowLocalStorage: true,
            allowSameOrigin: true,
          }}
          getRendition={(rendition) => {
            if (getRendition) getRendition(rendition);
          }}
        />
        {CustomMenu && CustomMenu}
        {HighlightDrawer && HighlightDrawer}
        {NotesDrawer && NotesDrawer}
      </div>
    </>
  );
}

export default ReactEpubReader;
