# ALPACA PROJECT

# ABOUT THE INSTALLATION

First start by cloning the repository and using cd to go into de repo folder then install the dependecies.
## Installing dependancies

First, run the following to install the frontend dependencies.
```bash
cd frontend
npm install
```
afterwards run the following to install backend dependencies.
```bash
cd backend
npm install
```

## RUNNING IN LOCAL MACHINE

### Backend

To run the backend in your local machine you will need to run the following if you aren't developing:
```bash
cd backend
npm run start
```
If you want to make changes while you run the backend you can run:
```bash
cd backend
npm run dev
```
this however is not recommended if you don't know what you're doing.

### Frontend
To run the frontend first download the expo go app to be able to run in local.
then use the following commands (asuming you are in root directory)
```bash
cd frontend
npx expo start
```
When running this you will be shown a QR code that you can scan with the expo go app. You can try the app running on your local machine, shown on web browser and might be buggy, or from your phone, after scanning the QR code (ios scan from camera; android scan from the app)

***Dont forget that if you are running on localhost your phone and pc must be in the same network*** 
