import React from "react";

interface FormValues {
  profilePicture: FileList | undefined;
}

const initialFormValues: FormValues = {
  profilePicture: undefined
};

const ProfileEdit: React.FC = () => {
  return <div>Profile Edit</div>;
};

export default ProfileEdit;
