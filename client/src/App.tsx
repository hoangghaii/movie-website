import { FC } from 'react';
import { AppAvatar } from './components/atoms/AppAvatar';

const App: FC = () => {
  return (
    <div>
      <AppAvatar
        imgSrc={
          'https://images.unsplash.com/photo-1637361973734-5faf9b1e923e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        }
      />
    </div>
  );
};

export default App;
