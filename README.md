# **Hotel Listings App**

## **Project Setup**

```
yarn install
```

### **Compiles and Hot-Reloads for Development**
```
yarn serve
```

### **Compiles and Minifies for Production**
```
yarn build
```

### **Lints and Fixes Files**
```
yarn lint
```

### **Customise Configuration**
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## **Tech Stack**
- **Vue.js 2**
- **Vuex** (State Management)
- **Vue CLI**
- **SCSS**

---

## **Using Test Data**
To use the my edited test JSON file (`editedData.json`), update **`src/mock/index.js`**:

- **Change Line 10**:  
  ```js
  hotels: data1.results
  ```
- Ensure `editedData.json` is properly imported and used instead of the default dataset.

---

## **Approach**  
The design file was carefully analysed and broken down into reusable Vue components to ensure modularity and scalability. The project is built using **Vue CLI** and **Vuex** for state management.

### **Component Breakdown**  
1. **Header Section**  
   - The header was split into two components:  
     - `HotelHeader` (specific to this page)  
     - `BaseHeader` (a global component for design consistency)  
   - The `BaseHeader` uses a **slot** to display dynamic content, such as `"x hotels in Sydney"`, allowing for scalability.  
   - "Sydney" was hardcoded for this implementation, assuming that dynamic data would be provided by an API in a production environment.  

2. **Sorting Dropdown**  
   - Implemented as a **global component** called `FormFields` to handle various form elements such as dropdowns, text inputs, and search boxes.  
   - `FormFields` contains another global component, `FieldSelect`, which manages the dropdown functionality.  
   - A **field object** is passed into `FieldSelect`, allowing customization of colours, sizes, and styles.  

3. **Hotel Listings**  
   - The hotel listing is composed of:  
     - `HotelListing` (container component)  
     - `HotelListingItem` (individual hotel item)  
   - `HotelListingItem` consists of two sections:  
     - **Left side**: Displays the hotel image and promotional banners.  
     - **Right side**: Contains hotel details, pricing, and savings.  
   - Built specifically for **hotel search results**, but in a production environment, it should be refactored into a global component for reuse across different sections (e.g., flights).  

4. **State Management with Vuex**  
   - **Vuex** is used to manage the global state, including hotel data and sorting options.  
   - The store module handles fetching, storing, and filtering hotel listings.  

5. **Data Handling & Assumptions**  
   - A **null check** was not implemented for hotel promotions, as all provided data includes promotional details. However, this should be added in production.  
   - Hardcoded a max width of **480px** to demonstrate text ellipsis styling. This would need adjustments for **responsive design**.  

---

## **Key Considerations & Notes**  

### **Currency**  
- Due to time constraints, the **currency symbol** was hardcoded.  
- In production, a **global currency conversion utility** should be implemented.  

### **Data Filtering**  
- Assumes that all data is in the **same currency**.  

### **Scrolling Behaviour**  
- A **scrollbar** was not added due to time limitations.  
- If implemented, it should be applied to the `HotelListing` component so that the **header remains sticky**.  

### **Room Type Link**  
- The **room type (red underlined text)** is not currently clickable.  
- In production, it should link to **different room options**, but this was omitted due to a lack of URLs in the provided `data.json` file.  

### **Hotel List Item Click Behaviour**  
- Since no URL was provided in `data.json`, the **click event** for hotel items was hardcoded.  
- In production, each hotel item should link to a **detailed hotel page**.  

### **Hotel Images**  
- The image URLs in `data.json` are randomised, resulting in **identical images across all hotels**.  
- In production, specific images should be provided.  

---

## **Future Enhancements**  
- Implement API integration for **dynamic hotel listings**.  
- Add **responsive design adjustments**.  
- Add **pagination**.
- Optimise **Vuex store performance** for better state management.  