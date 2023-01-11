import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import {
  View,
  Authenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
// import { Button, IconButton } from '@mui/icons-material';


Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h2>STUFF</h2>
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <p class="Username">Hello {user.username}</p>
          <button onClick={signOut}>Sign out</button>
          <p class="center">Welcome to kelvin.green</p>
        </main>
      )}
    </Authenticator>
    <Button variant="contained">Upload</Button>
    </header>
    </div>
  );
}

export default withAuthenticator(App); 
