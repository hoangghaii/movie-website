import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PartyCard } from './components/molecules/PartyCard';

const App: FC = () => {
  return (
    <BrowserRouter>
      <PartyCard
        partyTitle="Cadaver"
        partySubTitle="Horror marathon"
        partyImg={
          'https://images.unsplash.com/photo-1602230168052-741c2b79ea91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80'
        }
      />
      <PartyCard
        partyTitle="Cadaver"
        partySubTitle="Horror marathon"
        partyImg={
          'https://images.unsplash.com/photo-1602230168052-741c2b79ea91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80'
        }
        isChoose
      />
    </BrowserRouter>
  );
};

export default App;
