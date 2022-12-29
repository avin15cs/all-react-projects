import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    console.log('Name(before):', name);
    setName('');
    console.log('Name(after):', name);
    setGuests([...guests, name]);
    console.log(guests);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>AddGuest</button>
    </div>
  );
};

export default GuestList;
