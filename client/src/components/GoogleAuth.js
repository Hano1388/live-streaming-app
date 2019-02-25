import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client: auth2', () => {
      window.gapi.client.init({
        clientId: '645459013777-oh5urq52foc1ouvpa8lo7ceannbk8s1t.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google Auth</div>
  }
};

export default GoogleAuth;
