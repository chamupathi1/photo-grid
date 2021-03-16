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

## navigate to
`
http://localhost:3040/home
`
# ui library
Bootratap 
## behaviour
- if no photos are selected, it navegates to `/select`, in this path user can select / deselect upto 9 photos. ( by clicking on the photos )
- when the user has made some changes, header shows the `save` button. ( and a text saying `you have unsaved changes`)
- after saving the `save` button and the messages hides
- if user has at least 1 picture selected, user can go to `/home` path. user can view the photos
- at initial render, saved photos will be fetched from the back end.

# disclaimer
- this is my first try with react bootstrap.
- this is my first try with storybooks. 
## special note
back end mongo db hosted in atlas database and the user will expire in 7 days