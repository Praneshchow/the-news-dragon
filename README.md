# The Dragon News

## Install:

Npm install:    `npm install react-router-dom localforage match-sorter sort-by`

Run live site:   `npm run dev`

Install firebase:   `npm install firebase`

Install react bootstrap:    `npm install react-bootstrap bootstrap`

React Fast Marquee (news text animations to smooth marquees): `npm install react-fast-marquee --save`

## Install moment.js for time show:

Link: https://momentjs.com/

Install moment.js : `npm install moment`

I call the API data from the server (the-news-dragon-server). 

<hr/>


Create Private Route And Redirect From The Login Page:  When a person login in into the site. He will get redirect to the private route. That means we need to take the previous location. We can do that using 'useLocation'. Below link is provided. 

Link: https://github.com/remix-run/react-router/blob/main/examples/auth/src/App.tsx


## STEPS For Private Route
1. Check user is logged in or not. 
2. If user is logged in, then allow them to visit the route. 
3. Else redirect the user to the login page. 
4. Setup the private router. 
5. Handle loading. 

</hr>

## Dynamic title
I created a hook for dynamic title. It is called custom hook. There is another way, we can use dynamic title. "React Helmet async" is used for dynamic title change of every webpage. 


## Firebase Hosting
Firbase init:   `firebase init`.

```
? Are you ready to proceed? Yes

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
+  Wrote dist/index.html
+  Firebase initialization complete!

C:\Users\Acer\OneDrive\Desktop\PROJECTS\the-news-dragon>npm run build
```
Then run this command: `firebase deploy`. 


