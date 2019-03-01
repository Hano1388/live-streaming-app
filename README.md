# Live-streaming-app
Every user can sign in with Google and create streams, edit and delete their own streams and show any stream.
This project has three different servers, each one needs to be started in a different terminal window then visit the client app in browser at [localhost:3000](http://localhost:3000/), you will need OBS Software to be installed and working on your machine to be able to test it out which we will go through step by step bellow

### Installation
1. Make sure you have node installed on your machine
install node for windows or mac at [Node.js](https://nodejs.org/)
2. get a clone of the repo to your machine by
    - In your terminal run: ```git clone git@github.com:Hano1388/live-streaming-app.git``` or simply download the repo
3. Navigate to project directory in your machine then:
    - ```cd api``` and in another terminal tab
    - ```cd rtmpserver``` and in another tab
    - ```cd client```
4. `For each of them run the following commands`
    - ```npm install```
    - ```npm start```
### Setting up OBS
 - You can get OBS at [obsproject.com](obsproject.com)
 - Select the appropriate operating system then download it and simply install
 - you need to go to streams from OBS settings and configure OBS as following
    - for Service Tab, choose Custom
    - Server: rtmp://localhost/live
    - Stream Key: pick the ID of the stream you are showing
    - You will need to visit the stream with the same ID you've used as `OBS Stream Key` and start the stream on OBS then you would see the stream in your browser

### Used Resources
 1. Client
    - react
    - react-dom
    - react-router-dom
    - redux
    - redux-form
    - react-redux
    - redux-thunk
    - axios
    - flv.js
    - lodash
    - flv.js
 2. For api [json-server](https://www.npmjs.com/package/json-server)
 3. And [rtmp server](https://github.com/illuspas/Node-Media-Server)
 
