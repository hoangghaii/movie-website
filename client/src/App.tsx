import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FilmCard } from './components/molecules/FilmCard';
import { FilmCardLoading } from './components/molecules/FilmCardLoading';
import { PartyCard } from './components/molecules/PartyCard';
import { PartyCardLoading } from './components/molecules/PartyCardLoading';

const App: FC = () => {
  const film = {
    img: 'https://images.unsplash.com/photo-1602230168052-741c2b79ea91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80',
    name: 'Haunting of Hill House',
    desc: 'Horror marathon',
    episode: 10,
  };
  return (
    <BrowserRouter>
      <div style={{ margin: '20px' }}>
        <div>
          <FilmCard film={film} />
          <br />
          <FilmCardLoading />
        </div>
        <div>
          <PartyCard
            partyTitle={'Haunting of Hill House'}
            partySubTitle={'Horror marathon'}
            partyImg={
              'https://images.unsplash.com/photo-1602230168052-741c2b79ea91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80'
            }
          />
          <PartyCardLoading />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
