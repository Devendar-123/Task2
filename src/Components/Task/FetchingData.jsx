import React, { useState, useEffect } from 'react';
import "./fetch.css"
const FetchingData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState("")
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        
      } catch (error) {
        setError("Error in fetching data")
      }finally{
        setLoading(false)
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    const result = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(result);
  }, [searchQuery, users]); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  if (loading) {
    return <div className='loading-message' style={{textAlign:"center"}}>Loading...</div>;
  }
if(error){
  return(
    <p style={{textAlign:"center"}}>{error}</p>
  )
}
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Fetching data Using Fetch!</h2>
      <input
      className='search-input'
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    
      {filteredUsers.length > 0 ? (
        <div className='user-list-container'>
            <ul className='user-list'>
          {filteredUsers.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> <strong>-</strong><strong>{user.email}</strong> 
            </li>
          ))}
        </ul>
        </div>
      ) : (
        <div className='no-user-message'>No users found</div>
      )}
    </div>
  );
};

export default FetchingData;
