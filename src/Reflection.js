const Reflection = () => {

    return (
        <div>
            <p>
                # CA3 Boilerplate<br />
                <br />
                ## DAT3SEM GRP. 8<br />
                Alexander Pihl<br />
                <br />
                <h5>Reflections:</h5>
                I've used our groups startcode to implement af small quote fetcher which fetches famous quotes from the series Breaking Bad and display them in a bootstrap table.<br />
                <br />
                During this project I have learned how to make additional calls to other
                server while using the correct CORS standards. <br />
                I also gained experience in how to read documentation on external API's.
                The hard thing here is that different API's return different <br />
                kinds of JSON strings.<br />
                I had a problem with JSON objects inside arrays and therefor i couldn't acceess one of my implementet REST rest endpoint. <br />
                More specifically the endpoint fetching multiple quotes at the same time. I was able to fetch multiple quotes from the backend using the URL, but not from the frontend.<br />
                I was not able to solve the problem in time for hand in, but i will bring it up at review.<br />
                <br />
                ## Guide for using this code<br />
                1. Clone the repo to a folder of your choosing<br />
                2. Open your favorite terminal<br />
                3. Type: "npm install"<br />
                4. Type: "npm run build"<br />
                5. Type: "code ." to show code in visual studiocode<br />
                6. Locate the settings.js file and change the URL if you desire to run the project locally. Otherwise move on to step 7.<br />
                7. Type: "npm start"<br />
                8. (Optional) You can deploy your project either on your virtual machine or thru surge. I've chosen surge since it will reduce the trafic to my virtual machine for this assignment. Start by installing surge with the following command in bash "npm install --global surge". Now you can deploy your project on surge with the command "surge --project ./build --domain A_DOMAIN_NAME.surge.sh".<br />
                <br />
                ### Codes and login for test users:<br />
                Name:        Password:<br />
                user         popcorn<br />
                admin        popcorn<br />
                user_admin   popcorn<br />
                <br />
                ## View the frontend interact with the deployed backend<br />
                Turn of ad blocker when accessing the admin page - thank me later ;-)<br />
                <br />
                [http://alex_ca3_boilerplate_frontend.surge.sh/](http://alex_ca3_boilerplate_frontend.surge.sh/)<br />
            </p>
        </div>
    )

}

export default Reflection;