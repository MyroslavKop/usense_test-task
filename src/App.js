import { useState } from 'react';

import Form from './components/Form/Form';
import PasswordFields from './components/PasswordFields/PasswordFields';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <Form value={value} setValue={setValue} />
      <PasswordFields value={value} />
    </>
  );
}

export default App;
