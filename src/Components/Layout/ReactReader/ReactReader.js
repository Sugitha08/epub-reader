import React, { useEffect, useRef, useState } from "react";
import "./ReactReader.css";
import { ReactReader } from "react-reader";
import {
  Button,
  Card,
  IconButton,
  Link,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { MdOutlineTranslate } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { PiSpeakerHighLight } from "react-icons/pi";
import { BsHighlighter } from "react-icons/bs";
import CustomDrawer from "./CustomDrawer";
import { VscMute } from "react-icons/vsc";
import { BsJournalBookmark } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";

function ReactEpubReader({ epubFile }) {
  const [location, setLocation] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [rendition, setRendition] = useState(undefined);
  const [selectedText, setSelectedText] = useState(null);
  const [selectedCFI, setSelectedCFI] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [hLSlideOpen, setHLSlideOpen] = useState(false);
  const [notesSlideOpen, setNotesSlideOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [textToconvert, setTextToConvert] = useState(null);
  const [allHighlight, setAllHighLights] = useState([]);
  let speechSynthesis = window.speechSynthesis;
  const renditionref = useRef(null);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [BookMarkActive, setBookMarkActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [locationsReady, setLocationsReady] = useState(false);
  const [addNotesVis, setAddNotesVis] = useState(false);
  const [NotesContent, setNotesContent] = useState("");
  const [removehl, setRemovehl] = useState(null);

  // Load saved location on first render

  const storedLocation = localStorage.getItem("persist-location");
  useEffect(() => {
    if (storedLocation) {
      setLocation(storedLocation);
      setBookMarkActive(true);
    }
    setFirstRenderDone(true);
  }, []);

  // Handle location change while reading
  const handlelocationChange = (epubcfi) => {
    if (!firstRenderDone) return;
    setLocation(epubcfi);
    setCurrentPage(epubcfi);
  };

  // Handle bookmarking
  const handleBookmark = () => {
    if (BookMarkActive) {
      setBookMarkActive(false);
      localStorage.removeItem("persist-location");
    } else {
      if (currentPage) {
        setBookMarkActive(true);
        localStorage.setItem("persist-location", currentPage);
      }
    }
  };

  //Restrict CustomMenu
  const handleContextMenu = (event) => {
    event.preventDefault();
    const existingMenu = document.getElementById("custom-context-menu");

    if (existingMenu) {
      existingMenu.remove();
    }
  };

  const handleRestrictCopy = (e) => {
    if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "a")) {
      e.preventDefault();
    }
  };

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  //menu
  useEffect(() => {
    if (!rendition) return;
  
    rendition.display(storedLocation || 0).then(() => {
      if (rendition.book) {
        rendition.book.ready.then(() => {
          if (rendition.book.locations) {
            rendition.book.locations.generate().then(() => {
              setLocationsReady(true);
            });
          }
        });
      } else {
        console.warn("Book is not available yet, retrying...");
      }
    }).catch(err => console.error("Error displaying EPUB:", err));
  
    return () => {
      rendition && rendition.off("selected");
    };
  }, [rendition]);

  // Hightlight
  useEffect(() => {
    if (rendition && epubFile) {
      allHighlight?.forEach((highlight) => {
        rendition.annotations.add(
          "highlight",
          highlight.cfiRange,
          {},
          () => console.log("Clicked highlight:", highlight.cfiRange),
          "my-class",
          { fill: highlight.color }
        );
      });
    }
    if (rendition && locationsReady) {
      // Handle selection but don’t highlight yet
      const setRenderSelection = (cfiRange) => {
        if (rendition) {
          const text = rendition.getRange(cfiRange).toString();
          setSelectedText(text);
          setSelectedCFI(cfiRange);

          // Get bounding box for position
          const range = rendition.getRange(cfiRange);
          const rects = range.getClientRects();
          if (rects.length === 0) return;

          // Get the last rect (end of selection)
          const lastRect = rects[rects.length - 1];

          if (range) {
            const rect = range.getBoundingClientRect();
            // Get the iframe scroll position
            const iframe = document.querySelector("iframe");
            const iframeRect = iframe.getBoundingClientRect();
            const iframeWindow = iframe.contentWindow;

            // Adjust popup position relative to the document
            const top =
              lastRect.bottom + iframeRect.top + iframeWindow.scrollY + 5; // Slight offset below the text
            const left =
              lastRect.right + iframeRect.left + iframeWindow.scrollX + 5;
            setPopoverPosition({ top, left });
            setShowPopup(true);
            setAnchorEl({
              top,
              left: left + 50,
            });
          }
        }
      };
      rendition.on("selected", setRenderSelection);

      return () => {
        if (rendition) {
          rendition.off("selected"); // Cleanup
        }
      };
    }
  }, [rendition, locationsReady]);

  useEffect(() => {
    const storedHighlights =
      JSON.parse(localStorage.getItem(`ebook-highlights`)) || [];
    setAllHighLights(...allHighlight, storedHighlights);
  }, []);

  //highlightButton
  const handleHightlight = async (color) => {
    if (selectedCFI && rendition) {
      const newHighlight = {
        text: selectedText,
        cfiRange: selectedCFI,
        color: color,
      };

      const updatedHighlights =
        JSON.parse(localStorage.getItem(`ebook-highlights`)) || [];

      updatedHighlights.push(newHighlight);

      localStorage.setItem(
        `ebook-highlights`,
        JSON.stringify(updatedHighlights)
      );

      rendition.annotations.add(
        "highlight",
        selectedCFI,
        {},
        () => console.log("Clicked highlight:", selectedCFI),
        "my-class",
        { fill: color }
      );

      setSelectedText(null); // Clear selection
    }
    setAnchorEl(null);
    setSelectedText(null);
  };

  //Audio Reading
  useEffect(() => {
    if (rendition) {
      rendition.hooks.content.register((contents) => {
        const doc = contents.window.document;
        const text = doc.body.innerText;
        setTextToConvert(text);
      });
    }
  }, [rendition]);

  const startReading = () => {
    if (textToconvert) {
      let utterance = new SpeechSynthesisUtterance(textToconvert);

      // Track current word being spoken
      utterance.onboundary = (event) => {
        const wordStart = event.charIndex;
        const word = textToconvert.substring(wordStart).split(" ")[0];
        highlightWord(word);
      };

      speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  const stopReading = () => {
    speechSynthesis.cancel();
    setIsReading(false);
  };

  // Function to highlight the current Reading word
  const highlightWord = (word) => {
    if (!rendition || !word) return;

    try {
      // Find the word inside the EPUB
      if (rendition) {
        rendition.hooks.content.register((contents) => {
          console.log("Content Hook Triggered!");
          const doc = contents.window.document;
          const text = doc.body.innerText;
          // Find word position
          const wordIndex = text.indexOf(word);
          console.log(text);
          if (wordIndex === -1) return; // Word not found

          // Generate a rough CFI range (not 100% precise)
          const cfiRange =
            rendition.location.start.cfi + `/text()[${wordIndex}]`;

          console.log("CFI Range:", cfiRange);

          // Remove previous highlights
          rendition.annotations.remove("highlight");

          // Add highlight
          rendition.annotations.add(
            "highlight",
            cfiRange,
            {},
            () => console.log("Clicked highlight:", cfiRange),
            "my-class",
            { fill: "yellow" }
          );
        });
      }
    } catch (error) {
      console.log(word, "Currently Reading");
      console.log("Highlighting current word issue:", error);
    }
  };

  const [NotesList, setNoteList] = useState([]);
  useEffect(() => {
    const storedNotes = localStorage.getItem("Notes");
    if (storedNotes) {
      setNoteList(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(NotesList));
  }, [NotesList]);

  const handleAddNotes = (e) => {
    e.preventDefault();
    if (NotesContent.trim() === "") return;

    const updatedNotes = [...NotesList, NotesContent];
    setNoteList(updatedNotes);

    setNotesContent("");
    setAddNotesVis(false);
  };
  return (
    <>
      <div
        className={`reader-container  ${
          hLSlideOpen || notesSlideOpen ? "drawer-open" : ""
        } `}
      >
        <div className="header-content">
          <Tooltip title={BookMarkActive ? "Remove BookMark" : "Add BookMark"}>
            <IconButton
              onClick={handleBookmark}
              className={`${BookMarkActive ? "active" : ""}`}
            >
              <BsJournalBookmark size={21} />
            </IconButton>
          </Tooltip>
          <Tooltip title={isReading ? "stopReading" : "startReading"}>
            <IconButton
              onClick={isReading ? stopReading : startReading}
              className={`${isReading ? "active" : ""}`}
            >
              {isReading ? (
                <PiSpeakerHighLight size={23} />
              ) : (
                <VscMute size={23} />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="Highlights">
            <IconButton
              onClick={() => setHLSlideOpen(!hLSlideOpen)}
              className={`${hLSlideOpen ? "active" : ""}`}
            >
              <BsHighlighter size={23} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notes">
            <IconButton
              onClick={() => setNotesSlideOpen(!notesSlideOpen)}
              className={`${notesSlideOpen ? "active" : ""}`}
            >
              <LuNotebookPen size={23} />
            </IconButton>
          </Tooltip>
        </div>
        <ReactReader
          url={epubFile}
          location={location}
          locationChanged={handlelocationChange}
          epubOptions={{
            allowPopups: true, // Adds `allow-popups` to sandbox-attribute
            allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
            allowLocalStorage: true,
            allowSameOrigin: true,
          }}
          getRendition={(rendition) => {
            if (rendition) {
              setRendition(rendition);
              renditionref.current = rendition;
              rendition?.flow("paginated");
              rendition?.spread("always");
              rendition?.hooks.content.register((contents) => {
                const document = contents.window.document;
                if (document) {
                  //Enable Scripts from Epub
                  const scripts = document.querySelectorAll("script");
                  scripts.forEach((script) => {
                    const newScript = document.createElement("script");
                    if (script.src.startsWith("blob:")) {
                      fetch(script.src)
                        .then((res) => res.text())
                        .then((scriptText) => {
                          newScript.textContent = scriptText;
                          document.body.appendChild(newScript);
                        })
                        .catch((err) =>
                          console.error("Failed to load Blob script:", err)
                        );
                    } else {
                      newScript.src = script.src;
                      document.body.appendChild(newScript);
                    }
                  });

                  const iframe = contents.window.frameElement;
                  if (iframe) {
                    iframe.setAttribute(
                      "sandbox",
                      "allow-scripts allow-same-origin allow-popups"
                    );
                  }

                  //Custom ContextMenu
                  document.addEventListener("contextmenu", handleContextMenu);

                  // Block copy (Ctrl+C, Ctrl+X, Ctrl+A)
                  document.addEventListener("keydown", handleRestrictCopy);

                  //   FontAwesome Link
                  let faScript = document.getElementById("fa-script");
                  if (!faScript) {
                    faScript = document.createElement("link");
                    faScript.id = "fa-script";
                    faScript.rel = "stylesheet";
                    faScript.href =
                      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
                    document.head.appendChild(faScript);
                  }
                }

                //Float Notes Icon
                const NotesIcon = document.createElement("button");
                NotesIcon.innerHTML = `<i class="fas fa-sticky-note" className="mt-3"></i>`;
                NotesIcon.className = "FloatNote-icon";
                NotesIcon.style.position = "fixed";
                NotesIcon.style.bottom = "20px";
                NotesIcon.style.right = "60px";
                NotesIcon.style.width = "50px";
                NotesIcon.style.height = "50px";
                NotesIcon.style.borderRadius = "50%";
                NotesIcon.style.border = "none";
                NotesIcon.style.cursor = "pointer";
                NotesIcon.style.backgroundColor = "#007bff";
                NotesIcon.style.color = "white";
                NotesIcon.style.fontSize = "20px";
                NotesIcon.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
                document.body.appendChild(NotesIcon);
              });
            }
          }}
        />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={popoverPosition}
        // MenuListProps={{
        //   "aria-labelledby": "basic-button",
        // }}
      >
        <div style={{ width: "180px" }}>
          <div
            className="d-flex justify-content-between align-items-center g-3 px-2 mb-1"
            style={{ width: "100%" }}
          >
            {["#829dff", "#a68deb", "#ec7980", "#f7d755", "#76d45f"].map(
              (color, index) => (
                <div
                  key={index}
                  role="button"
                  className="highlight-color"
                  style={{ backgroundColor: color }}
                  onClick={() => handleHightlight(color)}
                ></div>
              )
            )}
          </div>
          {addNotesVis ? (
            <div style={{ width: "180px", padding: "5px" }}>
              <form onSubmit={handleAddNotes}>
                <TextField
                  id="standard-textarea"
                  fullWidth
                  placeholder="Add Notes..."
                  multiline
                  variant="standard"
                  value={NotesContent}
                  onChange={(e) => setNotesContent(e.target.value)}
                />
                <Button
                  type="submit"
                  className="my-2"
                  sx={{ padding: "2px 8px", fontSize: "10px", float: "right" }}
                >
                  Add Notes
                </Button>
              </form>
            </div>
          ) : (
            <>
              {" "}
              <MenuItem onClick={() => setAddNotesVis(true)}>
                <GrNotes className="me-2" size={14} />
                Notes
              </MenuItem>
              <MenuItem>
                <MdOutlineTranslate className="me-2" size={14} />
                Translate
              </MenuItem>
            </>
          )}
        </div>
      </Menu>
      <CustomDrawer
        open={hLSlideOpen}
        handleClose={() => setHLSlideOpen(false)}
        title="Highlights"
      >
        <div className="p-2 d-flex flex-column" style={{ rowGap: "10px" }}>
          {allHighlight?.length > 0 ? (
            allHighlight?.map((highlight) => (
              <>
                <Card
                  key={highlight.id}
                  className="px-3 py-2"
                  style={{ backgroundColor: "#ececec", color: "black" }}
                >
                  <Typography>
                    {highlight?.text?.split(" ").slice(0, 12).join(" ") + "..."}
                  </Typography>
                  <div
                    style={{ float: "right" }}
                    className="linktoHl"
                    onClick={() => {
                      setLocation(highlight?.cfiRange);
                      setHLSlideOpen(false);
                    }}
                  >
                    Go
                  </div>
                </Card>
              </>
            ))
          ) : (
            <div>
              <p>No Highlights</p>
            </div>
          )}
        </div>
      </CustomDrawer>
      <CustomDrawer
        open={notesSlideOpen}
        handleClose={() => setNotesSlideOpen(false)}
        title="Notes"
      >
        <div
          className="notes-container d-flex flex-column"
          style={{ height: "100%", gap: "15px", overflow: "hidden" }}
        >
          <div
            style={{
              overflowY: "auto",
              height: "85%",
            }}
          >
            <div className="p-2 d-flex flex-column" style={{ rowGap: "10px" }}>
              {NotesList.length > 0 ? (
                NotesList?.map((note) => (
                  <>
                    <Card
                      key={note.id}
                      className="px-3 py-2"
                      style={{ backgroundColor: "#ececec", color: "black" }}
                    >
                      <Typography>
                        {note?.split(" ").slice(0, 12).join(" ") + "..."}
                      </Typography>
                      <div
                        style={{ float: "right" }}
                        className="linktoHl"
                        // onClick={() => {
                        //   setLocation(highlight?.cfiRange);
                        //   setHLSlideOpen(false);
                        // }}
                      >
                        Go
                      </div>
                    </Card>
                  </>
                ))
              ) : (
                <div>
                  <p>No Notes</p>
                </div>
              )}
            </div>
          </div>
          {/* <div
            className="notes-field"
            style={{
              position: "sticky",
              bottom: "5",
              zIndex: 1000,
              height: "15%",
            }}
          >
            <TextField
              id="standard-textarea"
              fullWidth
              label="Notes..."
              placeholder="Add Notes..."
              multiline
              rows={4}
              variant="standard"
            />
          </div> */}
        </div>
      </CustomDrawer>
    </>
  );
}

export default ReactEpubReader;
