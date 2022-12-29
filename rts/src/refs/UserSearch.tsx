import { useState, useRef, useEffect } from 'react';

//Iss file mein humlog kya kar rhe hain?
//Isme hmlog ko bas ektextfield ko focus karna hai jb bhi yeh component render hoga

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michel', age: 20 },
];

const UserSearch: React.FC = () => {
  //yahan pe input element ke liye reference chahiye tha isiliye hmlog HTMLInputElement use  kiye hain
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current?.focus();
  }, []);
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
