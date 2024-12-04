# Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 

![Copy of Fullstack Airbnb Clone ](https://user-images.githubusercontent.com/23248726/229031522-64a49ad0-66f7-4ea8-94a8-f64a0bb56736.png)

## Features

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

## Demo

You can check out a live demo of the Airbnb clone project [here](https://homefinder-gamma.vercel.app/).
(Note: There are some deployment issues currently. For the best experience, please run the project locally.)

## Screenshots

<kbd><img width="944" alt="airbnb" src="https://raw.githubusercontent.com/IbrahimEmad11/next13-airbnb-clone/refs/heads/main/Screenshot%202024-12-04%20021539.png"></kbd>

<kbd><img width="886" alt="login-modal" src="https://raw.githubusercontent.com/IbrahimEmad11/next13-airbnb-clone/refs/heads/main/Screenshot%202024-12-04%20021504.png"></kbd>

<kbd><img width="810" alt="listing" src="https://raw.githubusercontent.com/IbrahimEmad11/next13-airbnb-clone/refs/heads/main/Screenshot%202024-12-04%20021702.png"></kbd>

## Prerequisites

Make sure you have the following software installed on your system:

- git If you want to clone the project from GitHub and work with it locally, you will need to have Git installed on your system. You can download and install Git from the official website (https://git-scm.com/).

- Node.js Application requires Node.js to be installed on your system in order to run. You can download and install the latest version of Node.js from the official website (https://nodejs.org/).

## Installation

- Clone the repository:

  ```
  git clone https://github.com/IbrahimEmad11/next13-airbnb-clone
  ```

- Navigate to the project directory:

  ```
  cd Airbnb
  ```

- Install the dependencies:

  ```
  npm install
  ```

- Set up the environment variables:

  1.  Create a `.env.local` file in the root directory.

  2.  Add the following variables to the .env file, replacing the placeholder values with your own:

      ```
      DATABASE_URL=<your-mongodb-uri>
      GITHUB_CLIENT_ID=<your-github-client-id>
      GITHUB_CLIENT_SECRET=<your-github-client-secret>
      GOOGLE_CLIENT_ID=<your-google-client-id>
      GOOGLE_CLIENT_SECRET=<your-google-client-secret>
      NEXTAUTH_SECRET=<your-nextauth-secret>
      ```

  ```

  ```

## Usage

- Start the development server:

  ```
  npm run dev
  ```

- Open your browser and visit `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes to the new branch.
- Open a pull request back to the main repository, including a description of your changes.
