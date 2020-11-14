# CA3 Boilerplate

## DAT3SEM GRP. 8
Alexander Pihl

I've used our groups startcode to implement af small quote fetcher which fetches famous quotes from the series Breaking Bad and display them in a bootstrap table. 

During this project I have learned how to make additional calls to other
server while using the correct CORS standards. 

I also gained experience in how to read documentation on external API's.
The hard thing here is that different API's return different 
kinds of JSON strings.

I had a problem with JSON objects inside arrays and therefor i couldn't acceess one of my implementet REST rest endpoint. 
More specifically the endpoint fetching multiple quotes at the same time. I was able to fetch multiple quotes from the backend using the URL, but not from the frontend.
I was not able to solve the problem in time for hand in, but i will bring it up at review.

## Guide for using this code
1. Clone the repo to a folder of your choosing
2. Open your favorite terminal
3. Type: "npm install"
4. Type: "npm run build"
5. Type: "code ." to show code in visual studiocode
6. Locate the settings.js file and change the URL if you desire to run the project locally. Otherwise move on to step 7.
7. Type: "npm start"
8. (Optional) You can deploy your project either on your virtual machine or thru surge. I've chosen surge since it will reduce the trafic to my virtual machine for this assignment. Start by installing surge with the following command in bash "npm install --global surge". Now you can deploy your project on surge with the command "surge --project ./build --domain A_DOMAIN_NAME.surge.sh".

### Codes and login for test users:
    Name:        Password:
    user         popcorn
    admin        popcorn
    user_admin   popcorn

## View the frontend interact with the deployed backend
Turn of ad blocker when accessing the admin page - thank me later ;-)

[http://alex_ca3_boilerplate_frontend.surge.sh/](http://alex_ca3_boilerplate_frontend.surge.sh/)