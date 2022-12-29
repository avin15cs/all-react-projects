import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          //jb humne yahan pe Name ko reset karke '' kar diya hai fir kyun setGuests mein name add karne pe proper name aa rha?
          setName('');
          setGuests([...guests, name]);
        }}
      >
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;
