import React from 'react';

function Home()  {
    return(
        <div>
            <h3>This is the home page!</h3>
            <p>Please click "register" to get started!</p>
            <p>If you already have login credentials, please click "login"</p>
            <p>By logging in <i>or</i> registering, you will have access to the list of jokes and users!</p>
            <p>If you click the logout button at the top, you will be logged out of the system and sent to the login page!</p>
        </div>
    )
}

export default Home;