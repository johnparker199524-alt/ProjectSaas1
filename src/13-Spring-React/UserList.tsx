import React, { useEffect, useState } from 'react';

type UserModel = {
  id: number;
  descrizione: string;
  name: string[];
  age: number;
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella fetch');
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => console.error('Errore:', error));
  }, []);

  return (
    <div>
      <h2>Lista Utenti</h2>
      {users.map(user => (
        <div key={user.id} style={{ border: '1px solid gray', margin: '8px', padding: '8px' }}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Descrizione:</strong> {user.descrizione}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Names:</strong> {user.name.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;