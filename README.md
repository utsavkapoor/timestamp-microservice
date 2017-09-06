<!DOCTYPE html>
<html>

   <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
      <link href="/public/style.css" rel="stylesheet" type="text/css">
   </head>

   <body>
      <div class="container">
        <h1>API Basejump: Timestamp microservice</h1>
        <h4>User Stories:</h4>
        <ol>
          <li>I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</li>
          <li>If it does, it returns both the Unix timestamp and the natural language form of that date.</li>
          <li>If it does not contain a date or Unix timestamp, it returns null for those properties.</li>
        </ol>
        <h2>Example usage:</h2>
        <p><span>https://ts-microservice.glitch.me/December%2015,%202015</span></p>
        <p><span>https://ts-microservice.glitch.me/15%20December,%202015</span></p>
        <p><span>https://ts-microservice.glitch.me/12-15-2015</span></p>
        <p><span>https://ts-microservice.glitch.me/15-12-2015</span></p>
        <p><span>https://ts-microservice.glitch.me/1450137600</span></p>
        <h2>Example output:</h2>
        <p><span>{"unix": 1450137600, "natural": "December 15, 2015"}</span></p>
      </div>
   </body>

</html>
