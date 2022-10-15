import React, { useState } from "react";
import { BsHeart, BsTelephone } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import Edit from "./Edit";
import Delete from './Delete';

const Profile = ({ data }) => {
  let [like, setLike] = useState(false);
  let [edit, setEdit] = useState(false);
  let [deleteprofile, setDelete] = useState(false);
  
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    setDelete(!deleteprofile)
  };

  return (
    <>
      <div className="profile">
        <div className="profile__image">
          <img src={data.avatar} alt="profile" />
        </div>
        <div className="profile__details">
          <h1>{data.username}</h1>
          <div>
            <CgMail></CgMail>
            <p> {data.email}</p>
          </div>
          <div>
            <BsTelephone></BsTelephone>
            <p> 080 {data.phone}</p>
          </div>
          <div>
            <TbWorld></TbWorld>
            <p>{data.website}</p>
          </div>
        </div>
        <div className="profile__curd">
          <BsHeart
            className={like ? "like" : ""}
            onClick={() => setLike(!like)}
          ></BsHeart>
          <AiOutlineEdit onClick={handleEdit}></AiOutlineEdit>
          <RiDeleteBin6Line onClick={handleDelete}></RiDeleteBin6Line>
        </div>
      </div>
      {edit ? (
        <>
          <Edit data={data} setEdit={setEdit} />
        </>
      ) : (
        ""
      )}
      {deleteprofile ?<Delete data={data} setDelete={setDelete} />: '' }
    </>
  );
};

export default Profile;
