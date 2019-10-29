# Jammming

Built with React, Jammming is a playlist creator that is connected to the Spotify API. 

This is a Codecademy.com Captstone Project where additional features have been added to improve user function.

## Special Features

* Press 'Enter' to search
* Album cover art, 30 second preview function

## Getting Started

Make sure you have Node.js + NPM Package, Git Bash, and access to the Spotify API. 

### Prerequisites

1) [Node.js + NPM Package](https://wsvincent.com/install-node-js-npm-windows/) - Node Package Manager 

2) [Git Bash](https://gitforwindows.org/) - Microsoft Emulation layer for a Git command line

3) [Spotify Developers Account](https://developer.spotify.com/dashboard/applications) - Provides access to the Spotify API
```
create an App to retrieve a 'Client ID' and in 'Edit Settings' set Redirect URIs to http://localhost:3001/
```
### Installing

1) Download Zip & extract to directory of your choice

2) in 'src\util\Spotify.js', paste your Client ID from spotify on Line 2

2) Git Bash into the new 'Jammmming-master' folder so the terminal is running at the  correct directory

3) In Git Bash load all required components through 
```
npm install
```

4) In Git Bash Host this project on your local port
```
npm start
```

5) A window should open at http://localhost:3001/ and you should now be able to search up songs, listen to previews, and make your own spotify playlist!


## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/) - The web framework used

## Authors

* **Wesley Chen** - *Initial work* - [IdleScV](https://github.com/IdleScV)

See also the list of [contributors](https://github.com/IdleScV/Jammming/contributors) who participated in this project.


## Acknowledgments

* Codecademy.com
* Everyone on the codecademy Forums and those who've posted their Jammming Projects to Github

