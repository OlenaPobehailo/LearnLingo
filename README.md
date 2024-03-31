# LearnLingo

## An application for a company that offers to use the services of online language teachers

This application is designed for a company offering online language teacher services. It consists of three main pages: Home, Teachers, and Favorites.

## Structure

### Home Page

The Home page showcases the advantages of the company's services and includes a call-to-action button that redirects users to the Teachers page to start using the application.

### Teachers Page

The Teachers page lists the available teachers that users can filter based on the language, students' knowledge levels, and hourly rates. Each teacher card displays essential information about the teacher, such as name,avatar, languages taught, levels of expertise, rating, reviews, hourly rate, lessons completed, conditions, and experience.

#### Filtering

Users can filter teachers by:

- Language
- Student knowledge levels
- Hourly rates

### Favorites

Authenticated users can add teachers to their favorites list. The Favorites page displays all teachers added by the user to their favorites.

## Authentication and Database

The application features user authentication functionalities, including registration, login, user profile management, and logout. Firebase Realtime Database is utilized to store and retrieve teacher data.

## Routing

React Router is used for routing between different pages of the application, providing a seamless user experience.
