import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [clicks, setClicks]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function clickTitle()
  {
        setClicks(true);
        console.log(clicks);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder={clicks?"Title":"Please take a note ....."}
          onClick={clickTitle}
        />
        
       {clicks&&(<textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3"/>)}
        {clicks&&(<><Zoom in={true}><Fab onClick={submitNote}><AddCircleOutlineIcon/></Fab></Zoom></>)}
      </form>
    </div>
  );
}

export default CreateArea;
