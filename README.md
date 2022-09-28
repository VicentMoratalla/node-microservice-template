#

<p align="center">
  <a href="https://www.admiral.com">
    <img src="https://www.admiral.com/themes/contrib/admiral-legacy-theme/assets/images/logo.svg" alt="Logo" width="450">
  </a>

  <h3 align="center">Node Microseervice Template</h3>
  <p align="center">
    <a href="https://pr-ghub.admiral.uk/Admiral/node-microservice-template"><strong>Explore the repository »</strong></a>
    <br />
    <br />
  </p>
</p>

## Overview

- [Built with](#🔎-Built-With)
- [Setup](#setup)
- [Quick Start](#quick-start)
- [Tools](#tools)
- [Git](#git-process)
- [Visual Studio Code](#code-editor)

## 🔎 Built With

This section should list any major frameworks that you built your project using.

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Mocha](https://mochajs.org/)

## App skeleton
```
├── config
│   ├── constants.js
│   ├── custom-environment-variables.json
│   ├── default.json
│   ├── development.json
│   ├── production.json
├── src
│   ├── api-specification
│   │   ├── open-api-doc.js
│   ├── middleware
│   │   ├── auth.js
│   │   ├── logger.js
│   ├── public 
│   │   ├── readme.txt
│   ├── routes 
│   │   ├── pagehistories.js
├── test
│   ├── api.js
├── .gitignore
├── containerization.md
├── index.js
├── package-lock.json
├── package.json
├── README.md
├── sonar-project.properties
```

## Prerequisites

1. Node 14+ (raw files can be found on [nexus](https://nexus3.bolt.admiral.uk/#browse/browse:build-binaries:org%2Fnodejs) - make sure the files are added to your [path](#adding-software-to-your-path) )
2. C: drive access
3. Git installed
4. Git access (you should have this automatically through your profile)

## Steps

1.	npm install. It’s likely you might get some proxy 500 Error due to the package is not in Nexus.

2.	npm run start. It will run the service at port 3000, you can define another your own port using the following command:
export PORT=9000. 

3.	Go to localhost:3000/api-docs to navigate to Swagger documentation, see the routes available, methods, parameters and test the different request with predefine values.

4.	npm standard. It will run the standard package to give you all the things that you should modify in your JS files.

5.	To run SonarQube locally you’ll need to follow the next steps:

a.	Download community edition from the following link: https://www.sonarqube.org/downloads/

b.	Go to folder for 64-bit OS move to windows-x86–64	.

c.	Run StartSonar.bat and after few minutes it will start your SonarQube server. Make sure you have Java installed in your machine. 

d.	Open browser and http://localhost:9000/ (9000 is default) you will be navigated to below window. 

e.	You can login using default user and password (admin : admin).

f.	Download Sonar Scanner from the following link: https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/

g.	Unzip the file (sonar-scanner-3.2.0.1227-windows) and navigate to its bin folder and add Path to environment variables of system.
 
h.	Navigate to config folder of sonar scanner (C:\Users\MORATAE\APPS\sonar-scanner-4.6.2.2472-windows\conf), open the file sonar-scanner.

properties and change and add the following properties:

sonar.host.url=http://localhost:9000
sonar.projectKey=sonar-scanner
sonar.sources= C:\Users\{USERNAME}\GITHUB\node-microservice-template
sonar.login=admin
sonar.password=admin

i.	Now navigate to the Project folder of you code you want to scan (C:\Users\{USERNAME}\GITHUB\node-microservice-template) open command prompt on this location and run command sonar-scanner.bat.

j.	After successful analysis you will see it has posted the result to your SonarQube server http://locathost:9000/ with new project inside it. 


### Optional

Additional plugin to deal with Open API [vscode-openapi](https://github.com/42Crunch/vscode-openapi)

Addtional plugin to help increase quality of code by enforcing certain rules in your code [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### Running the default application (quote engine)

Run `npm start` to start the default application.

#### Stopping the server

To stop the server the easiest way is to send a kill signal `SIGINT` using the `CTRL+C` shortcut key in the terminal that is running the server.

#### Getting a new JWT token

To create valid requests (GET/POTS) you need to provide a valid JWT token using this page: https://jwt.io/.
To verify signature you must provide the word 'secret'.

### Running unit tests

Run `ng test` to execute the unit tests via [Mochajs](https://mochajs.org/).

### Running Linting

Run `ng lintfix` to run lint fixes [eslint](https://eslint.org/).

## Tutorials Further help

[Article showing how to use Open API and Swagger](https://medium.com/wolox/documenting-a-nodejs-rest-api-with-openapi-3-swagger-5deee9f50420)

[Interactive tutorial to understand Node](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=1s)

[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

## Git process

We are currently using a modified git flow with pull requests. This section is intentionally light on detail until we have decided the git strategy going forward with CI/CD.

## Code editor

The recommended code editor is Visual Studio code and this will just highlight the basics.

### File searching / Command Pallete

Pressing `CTRL + p` will open the command window which default to QUICK OPEN. Typing in a file name here will search your currently open project for that file. For example pressing this short cut and typing in `proxy` will show the `proxy.conf.json` file described above making it easy to go to and edit. When in this mode entering `>` will instead turn to command mode and you will search for any command supported by vs code.

### Opening a terminal

Pressing `CTRL + '` will open a terminal in your current VSCODE session. When first running this it will offer you to change your terminal and i would recommend setting it to git bash although this is optional. It can be changed later with the settings options below

### Opening settings

Pressing `CTRL + ,` will open the setting window for VSCODE. I recommend changing the file auto save settings if you are used to auto saving.

