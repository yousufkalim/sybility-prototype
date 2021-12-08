Sibylity UX prototype local installation guide

The Sibylity UX prototype is built with the Foundation 6 frontend framework and the repository is hosted privately on github. To run the prototype website locally, complete the following steps:

•	Send Scott your github profile email address to request access to the repository

•	Clone the remote repository at https://github.com/jscottk/sibylity.git to a folder on your computer
    
    If you’re new to git or don’t have a client you like to use already, I’d recommend the Github Desktop application 
    - https://desktop.github.com/  
    
    After installation of Github Desktop, click the dropdown menu in the top left corner of the application, select add > Clone Repository > URL Tab, paste the URL https://github.com/jscottk/sibylity.git into the URL field and select a folder on your harddrive to clone the website into

•	Install the Yarn package manager
    
    https://classic.yarnpkg.com/en/docs/install/

•	Navigate to the folder that you cloned the repository to using a terminal/command prompt
    
    If you’re using the Github Desktop application, there’s a shortcut to access the repository through your terminal. View the repository list in Github Desktop by clicking the dropdown menu in the top left corner of the application. Then right click the repository and select “Open in Terminal” to automatically launch the command prompt with the repository folder selected

•	Type “Yarn install” and hit enter to download all of the dependencies of the project. 

•	Type “Yarn start” and hit enter to run the project. If the action is successful, a local web server should start that allows you to view the website at http://localhost:8000/ 

    The login page can be viewed at http://localhost:8000/login.html 
    
    The styleguide can be viewed at http://localhost:8000/styleguide.html 
  
