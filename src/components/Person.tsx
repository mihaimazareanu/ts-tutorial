import {FC, useState, ChangeEvent} from 'react';
import { HairColor } from '../Enums';
import { User } from '../Interfaces';

export const Person: FC<User> = ({name, email, age}) => {

    const [country, setCountry] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    type NameType = "Mihai" | "Pedro";
    const nameForType: NameType = "Mihai";

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{email}</h2>
      <input placeholder='Write your country... ' onChange={handleChange} />
      <h2>{country}</h2>
      {HairColor.Pink}
    </div>
  );
}
