import React, { useState } from "react";
import { editProfile } from "../apis";
import { GrClose } from "react-icons/gr";

const Edit = ({ data, setEdit }) => {
  let [user, setUser] = useState({
    id: data.id,
    username: data.username,
    email: data.email,
    phone: data.phone,
    website: data.website,
  });

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let payload = {
      ...data,
      ...user,
      avatar:
        "https://avatars.dicebear.com/v2/avataaars/" +
        user.username +
        ".svg?options[mood][]=happy",
    };
    editProfile(payload);
  };
  return (
    <div className="modelsection">
      <div>
        <h1>
          <span>User Modal</span>
          <span onClick={() => setEdit(false)}>
            <GrClose></GrClose>
          </span>
        </h1>

        <form>
          <div>
            <label htmlFor="">Name:</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handelChange}
            />
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handelChange}
            />
          </div>
          <div>
            <label htmlFor="">phone:</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handelChange}
            />
          </div>
          <div>
            <label htmlFor="">Website:</label>
            <input
              type="text"
              name="website"
              value={user.website}
              onChange={handelChange}
            />
          </div>
          <div>
            <button onClick={() => setEdit(false)}>cancel</button>
            <button onClick={(e) => handelSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
