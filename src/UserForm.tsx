import React, { useState } from "react";

interface User {
  id?: number;
  name: string;
  email: string;
  street: string;
  city: string;
}

interface UserFormProps {
  initialUser?: User;
  onSubmit: (user: User) => void;
  onClose: () => void;  // ✅ Changed from onCancel to onClose
  editMode?: boolean;
}

const UserForm: React.FC<UserFormProps> = ({ initialUser, onSubmit, onClose, editMode = false }) => {
  const [user, setUser] = useState<User>(
    initialUser || { name: "", email: "", street: "", city: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <div className="user-form-container">
      <h2>{editMode ? "Edit User" : "Add User"}</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="street" value={user.street} onChange={handleChange} placeholder="Street" />
        <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="City" />

        <button type="submit">{editMode ? "Update User" : "Add User"}</button>
        <button type="button" className="cancel-button" onClick={onClose}>Cancel</button> {/* ✅ Fixed */}
      </form>
    </div>
  );
};

export default UserForm;
