# **Vue.js**  

## **Table of Contents**  
- [Overview](#overview)  
- [Requirements](#requirements)  
- [Project Structure](#project-structure)  
- [Setup Instructions](#setup-instructions)  
- [Technology Stack](#technology-stack)  
- [Contributing](#contributing)  
- [License](#license)  

---  

## **Overview**  
This is a simple Vue.js 2 application demonstrating state management with Vuex and API integration. The app fetches a list of users from an external API, displays them, and allows selecting a user to view their details.  

## **Requirements**  

### **State Management with Vuex**  
The application should use **Vuex** to manage state efficiently.  

### **Components**  
Implement three components:  

1. **AppHeader**  
   - Displays the application title.  
   - Shows a counter for the number of loaded users.  

2. **UserList**  
   - Fetches and displays a list of users from an external API.  
   - Each user has a "View Details" button.  
   - Clicking the button updates the selected user in Vuex store.  

3. **UserDetails**  
   - Displays detailed information about the selected user.  

### **API Integration**  
- Fetch users from the public API:  
  **[`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)**  
- Call the API inside the **`created`** lifecycle hook of the `UserList` component.  

### **Vuex State Management**  
- Store the list of users in Vuex.  
- Implement an action to update the selected user.  
- Use a Vuex getter to retrieve the selected user.  

### **Component Behavior & State Updates**  
- **AppHeader**:  
  - Displays the count of users fetched from Vuex.  
- **UserList**:  
  - Renders the user list from Vuex.  
  - Clicking **"View Details"** updates the selected user in the store.  
- **UserDetails**:  
  - Displays information about the selected user from Vuex.  
  - Uses a **Vue watcher** to react to changes in the selected user.  

## **Project Structure**  

```
/src
 ├── components
 │   ├── AppHeader.vue
 │   ├── UserList.vue
 │   ├── UserDetails.vue
 │   ├── reusable
 │   │   ├── LoadingTable.vue
 │   │   ├── Spinner.vue
 ├── store
 │   ├── index.js
 ├── App.vue
 ├── main.js
```

## **Setup Instructions**  

1. Clone the repository:  
   ```sh
   git clone <repository_url>
   cd <project_directory>
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Run the application:  
   ```sh
   npm run serve
   ```

## **Technology Stack**  
- **Vue.js 2**  
- **Vuex**   

## **Contributing**  
Contributions are welcome! Please follow these steps:  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m 'Add new feature'`).  
4. Push to your fork (`git push origin feature-branch`).  
5. Open a Pull Request.  

## **License**  
This project is licensed under the MIT License. See the LICENSE file for more details.  

---  
This project demonstrates best practices for state management, API integration, and component reactivity in Vue.js 2. 🚀


