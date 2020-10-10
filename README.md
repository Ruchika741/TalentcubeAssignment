# TalentcubeAssignment

Running the backend code-

1) Open command prompt and give the path till BackendCode
2) Activate the virtual environment- venv\Scripts\activate
3) Run the server- python manage.py runserver -> It will run the backend code in the port 8000
4) Go to path "localhost:8000/admin" and use the login credential as "Ruchika26/Ruchika123" or else to create new user you can use- python manage.py creatsuperuser
5) After successful login, it will display Items model where you can add any item with the name, description and price. You can also give image. The image field is optional.

Running the frontend code-

1) Open command prompt and give the path till FrontEndCode and then run npm install
2) Go inside frontend folder and run npm start
3) It will run the server in port 3000. 
4) It will fetch the data from backend using api and display in the browser
5) On clicking any item, it will open another page with all the details displayed for that particular item
6) New item can be created on clicking New Item button and giving all the details where price value should not be more than 5 digit and Create button should be clicked
7) An item can be removed by clicking on delete icon.
