## Home Rental Application

### Project Description
A Next.js application that allows users to rent and lease rooms, houses, and apartments on a weekend, monthly, and long-term basis. The app features Google login, Firebase for data storage, and integrations with Google Maps and CloudImage. Users can add listings, search for properties, communicate with landlords, and manage favorite properties.

#### Features
Google Login: Allows users to quickly and securely log in to the application.
Firebase Integration: Stores user data, listings, and messages.
Google Maps Integration: Provides map functionalities for locating properties.
CloudImage Integration: Enables uploading and managing property images.
Property Listings: Users can add rooms, houses, and apartments with descriptions, prices, and photos.
Search Functionality: Allows users to search for properties based on location, price, and other criteria.
Messaging System: Users can send messages to landlords, who can view them in their panel.
Favorites: Users can add properties to their favorites for easy access later.

#### Deploy the App
You can access the deployed application here: https://home-rental-topaz.vercel.app/ .

### Installation
Clone the repository:

```
git clone https://github.com/terabajt/home-rental.git
```
Install dependencies:

```
cd home-rental-app
npm install
```

Create a .env file in the root directory and add your Firebase and Google Maps API keys:
```
env
NEXT_PUBLIC_DOMAIN=
NEXT_PUBLIC_API_DOMAIN=
MONGODB_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=
NEXTAUTH_URL_INTERNAL=
NEXTAUTH_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_MAPBOX_TOKEN=
NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=
```

Run the development server:
```
npm run dev
```

## Technologies Used
Next.js: Framework for building server-side rendered React applications.
Firebase: Backend-as-a-Service for authentication, database, and storage.
Google Maps API: Maps integration for property location.
CloudImage: Image management and optimization service.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.