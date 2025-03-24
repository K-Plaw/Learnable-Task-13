import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { fetchUsers } from './userSlice';
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';
import './App.css';

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, loading } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading)
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '15px' }}>PTS User List</h1>
      <button
        style={{
          background: 'green',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        onClick={() => navigate('/add-user')}
      >
        + Add User
      </button>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
