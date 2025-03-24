import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./UserList";
import UserForm from "./UserForm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect from "/" to "/users" */}
        <Route path="/" element={<Navigate to="/users" />} />

        {/* User List Page */}
        <Route path="/users" element={<UserList />} />

        {/* Add User Page */}
        <Route path="/add-user" element={
          <UserForm 
            onSubmit={(user) => console.log("User added:", user)} 
            onClose={() => window.history.back()} 
          />
        }/> 

        {/* Edit User Page */}
        <Route path="/edit-user/:id" element={
          <UserForm 
            onSubmit={(user) => console.log("User updated:", user)} 
            onClose={() => window.history.back()} 
            editMode
          />
        }/>
      </Routes>
    </Router>
  );
};

export default App;
