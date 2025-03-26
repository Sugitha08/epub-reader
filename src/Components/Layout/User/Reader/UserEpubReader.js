import React, { useEffect, useRef, useState } from "react";
import ReactEpubReader from "../../ReactReader/ReactReader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_highlight_Request,
  Get_Notes_Request,
  Get_progress_Request,
  Update_progress_Request,
} from "../../../../Redux/Action/UserAction/PreviewBookAction";
import {
  Button,
  Card,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { BsJournalBookmark } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { PiSpeakerHighLight } from "react-icons/pi";
import { BsHighlighter } from "react-icons/bs";
import { VscMute } from "react-icons/vsc";
import { MdOutlineTranslate } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import {
  Add_highlight_Request,
  Add_Notes_Request,
} from "../../../../Redux/Action/UserAction/PreviewBookAction";
import CustomDrawer from "../../ReactReader/CustomDrawer";
import axios from "axios";

function UserEpubReader() {
  const [rendition, setRendition] = useState(undefined);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [currentProgress, setCurrentProgress] = useState();
  const [location, setLocation] = useState();
  const [BookMarkActive, setBookMarkActive] = useState(false);
  const [percentage, setPercentage] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [textToconvert, setTextToConvert] = useState(null);
  const [hLSlideOpen, setHLSlideOpen] = useState(false);
  const [notesSlideOpen, setNotesSlideOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  let speechSynthesis = window.speechSynthesis;
  const renditionref = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [selectedText, setSelectedText] = useState(null);
  const [selectedCFI, setSelectedCFI] = useState(null);
  const [allHighlight, setAllHighLights] = useState([]);
  const [addNotesVis, setAddNotesVis] = useState(false);
  const [NotesContent, setNotesContent] = useState("");
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/user/dash/explore");
  };
  const [searchParams] = useSearchParams();
  const BookId = searchParams.get("BookId");
  const dispatch = useDispatch();
  const { Highlights, Notes, Progress } = useSelector(
    (state) => state.PreViewData
  );

  useEffect(() => {
    setAllHighLights(Highlights);
  }, [Highlights]);

  useEffect(() => {
    setCurrentProgress(Progress);
  }, [Progress]);

  useEffect(() => {
    dispatch(Get_highlight_Request(BookId));
    dispatch(Get_Notes_Request(BookId));
    dispatch(Get_progress_Request(BookId));
  }, []);

  // Load saved location on first render

  useEffect(() => {
    if (currentProgress) {
      setLocation(currentProgress);
      setBookMarkActive(true);
      setCurrentPage(currentProgress);
    }
    setFirstRenderDone(true);
  }, [currentProgress, Progress]);

  useEffect(() => {
    if (currentProgress === currentPage) {
      setBookMarkActive(true);
    } else {
      setBookMarkActive(false);
    }
  }, [location, currentProgress]);

  // Handle location change while reading
  const handlelocationChange = (epubcfi) => {
    if (!firstRenderDone) return;
    setLocation(epubcfi);
    setCurrentPage(epubcfi);
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

  //Rendition
  const getRendition = (rendition) => {
    if (rendition) {
      setRendition(rendition);
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
        // const NotesIcon = document.createElement("button");
        // NotesIcon.innerHTML = `<i class="fas fa-sticky-note" className="mt-3"></i>`;
        // NotesIcon.className = "FloatNote-icon";
        // NotesIcon.style.position = "fixed";
        // NotesIcon.style.bottom = "20px";
        // NotesIcon.style.right = "60px";
        // NotesIcon.style.width = "50px";
        // NotesIcon.style.height = "50px";
        // NotesIcon.style.borderRadius = "50%";
        // NotesIcon.style.border = "none";
        // NotesIcon.style.cursor = "pointer";
        // NotesIcon.style.backgroundColor = "#007bff";
        // NotesIcon.style.color = "white";
        // NotesIcon.style.fontSize = "20px";
        // NotesIcon.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        // document.body.appendChild(NotesIcon);
      });
    }
  };

  // Handle bookmarking
  const handleBookmark = () => {
    if (BookMarkActive) {
      setBookMarkActive(false);
      // localStorage.removeItem("persist-location");
    } else {
      if (currentPage && rendition.location) {
        // Get current position index
        const currentIndex = rendition.location.start.percentage;
        const percentage = Math.ceil((currentIndex * 100).toFixed(2));
        setPercentage(percentage);
        setBookMarkActive(true);
        dispatch(
          Update_progress_Request({
            book_id: BookId,
            bookmark: currentPage,
            percentage: percentage,
          })
        );
      }
    }
  };

  //Audio Reading
  useEffect(() => {
    if (rendition) {
      rendition?.hooks.content.register((contents) => {
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
        rendition?.hooks.content.register((contents) => {
          const doc = contents.window.document;
          const text = doc.body.innerText;
          // Find word position
          const wordIndex = text.indexOf(word);
          if (wordIndex === -1) return; // Word not found

          // Generate a rough CFI range (not 100% precise)
          const cfiRange =
            rendition?.location.start.cfi + `/text()[${wordIndex}]`;

          // Remove previous highlights
          rendition?.annotations.remove("highlight");

          // Add highlight
          rendition?.annotations.add(
            "highlight",
            cfiRange,
            {},
            () => console.log("Clicked highlight:", cfiRange),
            "my-class",
            { fill: "yellow" }
          );
        });
      }
    } catch (error) {}
  };

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  //CustomMenu
  useEffect(() => {
    if (!rendition) return;

    rendition
      .display(currentProgress || 0)
      .then(() => rendition.book?.ready)
      .then(() => {
        if (rendition.book?.locations) {
          return rendition.book?.locations.generate();
        }
      })
      .then(() => {})
      .catch((err) => console.error("Error displaying EPUB:", err));

    const setRenderSelection = (cfiRange) => {
      if (rendition) {
        const text = rendition?.getRange(cfiRange).toString();
        setSelectedText(text);
        setSelectedCFI(cfiRange);

        // Get bounding box for position
        const range = rendition?.getRange(cfiRange);
        const rects = range.getClientRects();
        if (rects.length === 0) return;

        // Get the last rect (end of selection)
        const lastRect = rects[rects.length - 1];

        if (range) {
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
          setAnchorEl({
            top,
            left: left + 50,
          });
        }
      }
    };

    // Ensure "on" method exists before using it
    if (rendition.on) {
      rendition.on("selected", setRenderSelection);
    } else {
      console.warn("rendition.on is not available");
    }

    return () => {
      if (rendition?.off) {
        rendition.off("selected", setRenderSelection);
      } else {
        console.warn("rendition.off is not available");
      }
      if (rendition?.destroy) {
        rendition.destroy();
      }
    };
  }, [rendition]);

  //Hightlight Previous Highlights
  useEffect(() => {
    if (rendition && allHighlight?.length > 0) {
      console.log(allHighlight);

      allHighlight?.forEach((highlight) => {
        rendition?.annotations.add(
          "highlight",
          highlight.highlight_range,
          {},
          () => console.log("Clicked highlight:", highlight.cfiRange),
          "my-class",
          { fill: highlight.color }
        );
      });
    }
  }, [rendition, allHighlight]);

  useEffect(() => {
    setAllHighLights(Highlights);
  }, []);

  //highlightButton
  const handleHightlight = async (color) => {
    if (selectedCFI && rendition) {
      const newHighlight = {
        book_id: BookId,
        text: selectedText,
        highlight_range: selectedCFI,
        color: color,
      };

      dispatch(Add_highlight_Request(newHighlight));

      rendition?.annotations.add(
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

  const [NotesList, setNoteList] = useState([]);

  useEffect(() => {
    setNoteList(Notes);
  }, [Notes]);

  const handleAddNotes = (e) => {
    e.preventDefault();
    if (NotesContent.trim() === "") return;
    const payload = {
      book_id: BookId,
      text: NotesContent,
      note_range: selectedCFI,
    };

    dispatch(Add_Notes_Request(payload));

    setNotesContent("");
    setAddNotesVis(false);
  };

  const header = (
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
          {isReading ? <PiSpeakerHighLight size={23} /> : <VscMute size={23} />}
        </IconButton>
      </Tooltip>
      <Tooltip title="Highlights">
        <IconButton
          onClick={() => {
            setHLSlideOpen(!hLSlideOpen);
            setNotesSlideOpen(false);
          }}
          className={`${hLSlideOpen ? "active" : ""}`}
        >
          <BsHighlighter size={23} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Notes">
        <IconButton
          onClick={() => {
            setNotesSlideOpen(!notesSlideOpen);
            setHLSlideOpen(false);
          }}
          className={`${notesSlideOpen ? "active" : ""}`}
        >
          <LuNotebookPen size={23} />
        </IconButton>
      </Tooltip>
      <div
        role="button"
        onClick={() => {
          if (rendition) {
            try {
              rendition.destroy?.();
            } catch (error) {
              console.error("Error destroying rendition:", error);
            }
          }
          setTimeout(() => {
            setRendition(null);
          }, 100);
          setRendition(null);
          setSelectedText(null);
          setSelectedCFI(null);
          setIsReading(false);
          setAnchorEl(null);
          setHLSlideOpen(false);
          setNotesSlideOpen(false);
          handleNav();
        }}
      >
        Go Back
      </div>
    </div>
  );

  const CustomMenu = (
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
          {["#829dff", "#a68deb", "#ec7980", "#f7d755", "#76d45f"]?.map(
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
  );

  const HighlightDrawer = (
    <CustomDrawer
      open={hLSlideOpen}
      handleClose={() => setHLSlideOpen(false)}
      title="Highlights"
    >
      <div className="p-2 d-flex flex-column" style={{ rowGap: "10px" }}>
        {allHighlight.length > 0 ? (
          allHighlight?.map((highlight) => (
            <>
              <Card
                key={highlight.id}
                className="px-3 py-2"
                style={{ backgroundColor: "#ececec", color: "black" }}
              >
                <Typography>
                  {highlight?.text?.length > 30
                    ? highlight?.text?.split(" ").slice(0, 12).join(" ") + "..."
                    : highlight?.text}
                </Typography>
                <div
                  style={{ float: "right" }}
                  className="linktoHl"
                  onClick={() => {
                    setLocation(highlight?.highlight_range);
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
  );

  const NotesDrawer = (
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
                      {note && note?.text?.length > 30
                        ? note?.text?.split(" ").slice(0, 12).join(" ") + "..."
                        : note?.text}
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
      </div>
    </CustomDrawer>
  );

  return (
    <ReactEpubReader
      epubFile="https://react-reader.metabits.no/files/alice.epub"
      location={location}
      locationChanged={handlelocationChange}
      getRendition={(rendition) => getRendition(rendition)}
      hLSlideOpen={hLSlideOpen}
      notesSlideOpen={notesSlideOpen}
      header={header}
      handleNav={handleNav}
      BookId={BookId}
      Highlights={Highlights}
      Notes={Notes}
      CustomMenu={CustomMenu}
      HighlightDrawer={HighlightDrawer}
      NotesDrawer={NotesDrawer}
    />
  );
}

export default UserEpubReader;
