import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import { data, friends, transaction, user } from '../data/allData';

export const App = () => {
  return (
    <>
      <Profile data={user} />
      <Statistics title="Upload stats" stats={data}></Statistics>
    </>
  );
};
