import { createContext, useContext, useState } from 'react';

const NebulaContext = createContext();

export function NebulaProvider({ children }) {
  const [posts, setPosts] = useState([]);

  function addPost(novoPost) {
    setPosts((prev) => [...prev, { id: Date.now(), ...novoPost }]);
  }

  return (
    <NebulaContext.Provider value={{ posts, addPost }}>
      {children}
    </NebulaContext.Provider>
  );
}

export function useNebula() {
  return useContext(NebulaContext);
}
