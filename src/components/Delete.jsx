import React from "react";
import { GrClose } from "react-icons/gr";
import { deleteProfile } from "./../apis";

const Delete = ({ data, setDelete }) => {
  return (
    <div className="delete">
      <div className="delete__user">
        <GrClose onClick={() => setDelete((ps) => !ps)}></GrClose>
        <p>Once you delete it you cannot retrieve it back.</p>
        <button onClick={() => deleteProfile(data.id)}>Confirm</button>
      </div>
    </div>
  );
};

export default Delete;
