import Axios from "axios";
import React, { FormEvent, useState } from "react";

const ProfileView: React.FC = () => {
  const [image, setImage] = useState<FileList | null>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log(image);

    const formData = new FormData();
    if (image) {
      formData.append("profilePicture", image[0]);

      const response = await Axios.post(
        "http://localhost:3008/api/user/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      // eslint-disable-next-line no-console
      console.log(response);
    }
  }

  return (
    <div>
      Profile
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="profile_picture"
          id="profile_picture"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImage(e.currentTarget && e.currentTarget.files)
          }
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ProfileView;
