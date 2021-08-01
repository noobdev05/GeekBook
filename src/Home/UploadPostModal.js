import { Button, IconButton } from "@material-ui/core";
import { AddAPhoto, TextFields, Code, Close } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import PostText from "./PostText";
import PostCode from "./PostCode";
import "./UploadPostModal.css";
function UploadPostModal({ show, handleClose }) {
  const [modalShow, setModalShow] = useState(show);
  const [postText, setPostText] = useState(null);
  const [postCode, setPostCode] = useState(null);
  const [descrip, setDescrip] = useState("");
  const [codeShow, setCodeShow] = useState(null);
  const [code, setCode] = useState(null);
  const [lang, setLang] = useState(null);
  const modal_style = show
    ? "uploadpost display_block"
    : "uploadpost display_none";
  return (
    <div className={modal_style}>
      <div className="modal">
        <h3>Post</h3>
        <hr />
        <div className="disc_post">
          <div className="preview_post"></div>
        </div>
        <div className="post_middle"></div>
        <div className="post_bottom">
          <div className="attachments">
            <IconButton>
              <AddAPhoto />
            </IconButton>
            <IconButton
              onClick={() => {
                setCodeShow(true);
              }}
            >
              <Code />
            </IconButton>
            <IconButton
              onClick={() => {
                setPostText(true);
              }}
            >
              <TextFields />
            </IconButton>
          </div>
          <div className="post_submit">
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained">Post</Button>
          </div>
        </div>
      </div>
      <div className="close_post" onClick={handleClose}>
        <Close />
      </div>
      <PostText
        show={postText}
        handleClose={() => {
          setPostText(null);
        }}
        handleText={(text) => {
          setDescrip(text);
        }}
      />
      <PostCode
        show={codeShow}
        handleClose={() => {
          setCodeShow(null);
        }}
        handleCode={(c) => {
          setCode(c);
        }}
        handleLang={(l) => {
          setLang(l);
        }}
      />
    </div>
  );
}

export default UploadPostModal;
