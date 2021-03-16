# Start back end

```
cd backend
npm install
npm start
```

# Start front end

```
cd ../fontend
npm install
npm start
```

## Front end port
`
http://localhost:3040/home
`
## UI library
Bootratap 
## Behaviour
- If no photos are selected, it navegates to `/select`, in this path user can select / deselect upto 9 photos. ( by clicking on the photos )
- When the user has made some changes, header shows the `save` button. ( and a text saying `you have unsaved changes`)
- After saving the `save` button and the messages hides
- If the user has at least 1 picture selected, user can go to `/home` path. user can view the photos
- At the initial render, saved photos will be fetched from the back end.

# disclaimer
- This is my first try with react bootstrap.
- This is my first try with storybooks. 
## special note
Back end mongo db hosted in atlas database and the user will expire in 7 days