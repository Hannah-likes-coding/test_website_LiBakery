# Li Bakery Website Testing

This repository contains automated end-to-end UI tests for the [Li Bakery website](https://yummylibakery.netlify.app) using Playwright. The tests cover critical user interactions such as homepage and Subscribe button validation
---

Integrated with Jenkins, Allure Reporting, and CI/CD pipelines.

## 📂 Project Structure

- `yummylibakery_tests_homepage_subscribe`  
  Playwright tests written in **JavaScript** focusing on homepage and Subscribe button functionality.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or above recommended)
- npm (comes with Node.js)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/test_website_LiBakery.git
   cd test_website_LiBakery

2. Install dependencies for each test project folder:

    ```bash
   cd yummylibakery_tests_homepage_subscribe
   npm install
   npx playwright install
   cd ../yummylibakery_tests_homepage_subscribe
   npm install
   npx playwright install
    cd ..
  
3. Running Tests
   npx playwright test
   
4. HTML report:
   <img width="940" height="653" alt="image" src="https://github.com/user-attachments/assets/fbfd93db-4fb3-4e65-b4ab-7519126d87a8" />

     

5. Generate Allure report:
   <img width="940" height="201" alt="image" src="https://github.com/user-attachments/assets/6b4f5742-0568-4145-a6b2-b65dd8fe2ee4" />
   <img width="940" height="444" alt="image" src="https://github.com/user-attachments/assets/8e0e9b76-745a-4ee0-b282-b639ed462f50" />

6. Jenkins:
   build with parameters:
   <img width="940" height="313" alt="image" src="https://github.com/user-attachments/assets/103ae9c0-0b1a-4017-965e-d9474359bd2e" />

   <img width="940" height="700" alt="image" src="https://github.com/user-attachments/assets/08887cdd-a180-4bfa-a86c-323f48731afc" />

   -- Console Output with different parameters:
   
      <img width="940" height="407" alt="image" src="https://github.com/user-attachments/assets/63e582f1-3541-476e-a073-26bbfa50bfda" />

      
      <img width="1013" height="425" alt="image" src="https://github.com/user-attachments/assets/ab01e4a9-5205-49f1-ad6b-77a0a2b9adad" />

      
      <img width="940" height="386" alt="image" src="https://github.com/user-attachments/assets/d5404625-50ad-442c-b4ed-31b3bdadfed0" />

     
⚙️ CI/CD Integration

GitHub Actions workflow available at .github/workflows/playwright.yml.

Allure reports integrated for detailed test reporting.


🧪 Test Coverage

Homepage title and content verification.

Subscribe button visibility and navigation.


📝 Notes

Tests run in headless mode by default.

Modify tests and configs as needed to fit your environment or website changes.


📞 Contact


For questions or support, please reach out to:

Hannah

Email: hannah.liyang@gmail.com

GitHub: https://github.com/Hannah-likes-coding


