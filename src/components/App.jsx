import Profile from './Profile/Profile';
import { data, friends, transaction, user } from '../data/allData';
console.log(user);

export const App = () => {
  return (
    <>
      <Profile data={user} />
    </>
  );
};
