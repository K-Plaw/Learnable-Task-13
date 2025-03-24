import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './store';
import { deleteUser } from './userSlice';
import { User } from './types';
import './App.css';

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>

      <div className="button-group">
        <button
          className="edit-button"
          onClick={() => navigate(`/edit-user/${user.id}`)}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => dispatch(deleteUser(user.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
