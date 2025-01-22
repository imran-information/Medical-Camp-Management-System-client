# Medical Camp Management System (MCMS)

## 🎯 Objective
The **Medical Camp Management System (MCMS)** is a MERN stack-based web application designed to simplify the organization and participation in medical camps. This platform provides organizers with the tools to manage camps effectively while offering participants an easy and interactive experience for camp registration and engagement.

---
  

## 🔑 Credentials
- **Organizer Email**: `imran.me@gmail.com`
- **Organizer Password**: `imraN1`

---

## 🌐 Live Site Link
[Visit the live site here](#)

---

<!-- ## 🔗 Repository Links
- **Client Side**: [Client Repository](#)
- **Server Side**: [Server Repository](#)

--- -->

## ✨ Features
1. **Responsive Design**: Fully responsive for mobile, tablet, and desktop, including dashboards.
2. **Dynamic Navbar**:
   - Shows `Join Us` button for guests and profile picture for logged-in users.
   - Dropdown menu for logged-in users with options: `Dashboard` and `Logout`.
3. **Banner Slider**: Highlights success stories and impactful moments from previous medical camps.
4. **Popular Camps Section**: Displays the top 6 camps based on participant count, including:
   - Camp Name, Image, Fees, Date & Time, Location, Healthcare Professional, and Participant Count.
   - Includes a "See All Camps" button linking to the Available Camps page.
5. **Camp Details Page**:
   - Comprehensive information about each camp.
   - "Join Camp" button with a registration modal for participants.
   - Increases participant count after successful registration.
6. **Feedback and Ratings Section**:
   - Displays participant feedback and ratings after payment confirmation.
   - Derived from the participant dashboard.
7. **Search and Sort on Available Camps**:
   - Search camps by keywords, dates, or other criteria.
   - Sort camps by registration count, fees, or alphabetical order.
   - Layout toggle for 3-column or 2-column card views.
8. **Organizer Dashboard**:
   - Manage Profile: Update name, image, and contact details.
   - Add a Camp: Create new camps using validated forms.
   - Manage Camps: Edit or delete existing camps.
   - Manage Registered Camps: Track participant data, confirm payments, or cancel registrations.
9. **Participant Dashboard**:
   - Analytics: Visualize registered camp data with charts.
   - Profile Management: Update participant information.
   - Registered Camps: View registered camps, make payments, cancel registrations, and provide feedback.
   - Payment History: Detailed transaction records.
10. **Authentication and Authorization**:
    - Login and Register pages with social login integration.
    - JWT-based authentication for private routes.

---
 

## 🚀 Advanced Features
- **Pagination and Search**:
  - Pagination in all tables, showing 10 rows per page.
  - Search functionality for tables by keywords, dates, or healthcare professional names.
- **Animations**:
  - Added animations using AOS (Animate on Scroll).
- **Axios Interceptors**: Improved API call handling.
- **Alternative UI Libraries**: Used Material Tailwind instead of Daisy UI.
- **Additional Features**:
  - Health Records Management (Participants).
  - Volunteer Management (Organizers).

---

## 💡 Optional Features Implemented
- **React Awesome Button** and **React Select** integration.
- **Payment Integration**: Stripe for secure payments, with transaction details stored in the database.
- **Custom Dashboard Feature**: Appointment scheduling for participants.

---

## 📋 Challenges Addressed
- Implemented JWT authentication for sensitive routes.
- Improved user experience with responsive design, smooth animations, and interactive UI.
- Enhanced data visualization with Recharts for participant analytics.
- Provided robust table management with pagination and search capabilities.

---

## 🛡️ Security Measures
- Used environment variables for sensitive data.
- Implemented role-based access control for organizer and participant dashboards.
- Secured API endpoints with JWT.

---

## 📖 Getting Started
### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repositories:
   ```bash
   git clone <client-repo-url>
   git clone <server-repo-url>
   ```
2. Install dependencies:
   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```
3. Configure environment variables in `.env` files for both client and server.

4. Run the development servers:
   ```bash
   cd client
   npm start

   cd ../server
   npm run dev
   ```

---

## 👩‍💻 Technologies Used
- **Frontend**: React, React Router, Tailwind CSS, TanStack Query
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: Firebase, JWT
- **Payments**: Stripe
- **Charts**: Recharts
- **UI Enhancements**: Material Tailwind, AOS
