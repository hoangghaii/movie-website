import Fingerprint from '@mui/icons-material/Fingerprint';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { AppButton } from 'src/components/atoms/AppButton';
import { AppIconButton } from 'src/components/atoms/AppIconButton';
import { FC, useState } from 'react';

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(!loading);
  };

  return (
    <div>
      <AppButton
        variant="outlined"
        iconPosition="start"
        icon={<DeleteIcon />}
        onClick={handleClick}
        style={{ borderRadius: '8px' }}
        loading={loading}
      >
        Delete
      </AppButton>
      <AppButton
        iconPosition="end"
        icon={<SendIcon />}
        onClick={handleClick}
        style={{ borderRadius: '8px' }}
        loading={loading}
      >
        Send
      </AppButton>
      <AppButton
        onClick={handleClick}
        style={{ borderRadius: '8px' }}
        loading={loading}
        variant="outlined"
      >
        Fetch data
      </AppButton>
      <AppIconButton
        color="secondary"
        icon={<Fingerprint />}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
