# Test Plan - Playwright Bookstore

## 1. Test Objectives

The objective of this test plan is to ensure that the Playwright Bookstore application functions correctly by:
- Verifying critical user workflows.
- Maintaining application stability.
- Identifying potential defects before deployment.

## 2. Test Scope

This test plan covers end-to-end testing of key bookstore functionalities in the Playwright Bookstore repository. The tests will focus on:
- Functional testing.
- UI testing.
- Automation using JavaScript and Playwright + PlaywrightBDD.

## 3. High-Level Test Cases

### 3.1 BookDetails.feature
- @BookDisplay

### 3.2 BookList.feature
- @BookListingDisplay
- @BookSearch
- @BookSorting

### 3.3 BookProfile.feature
- @CheckOrders
- @LogOut

### 3.4 BookShoppingCart.feature
- @PurchaseBook

### 3.5 BookSignIn.feature
- @UserLogin 

### 3.6 BookSignUp.feature
- @UserRegisterAndLogin

## 4. Tools and Frameworks
- **Test Framework**: Playwright
- **Programming Language**: JavaScript
- **Test Runner**: Playwright Test Runner
- **Repository**: [Playwright Bookstore Repository](https://github.com/PeterLukic/PlaywrightBDDBookstore)

## 5. Test Environment
- **Browser**: Chromium, FireFox, Microsoft Edge
- **Operating System**: Windows 10,Mac OS, Linux
- **Test Data**: Sample book data provided in `dataBookStore.json`.

## 6. Test Execution
- Tests will be executed automatically using Playwright scripts.
- Results will be logged and reviewed for any failures or defects.

## 7. Run Tests 
- Run all test: npx bddgen; npx playwright test

* Run Specific Test:
- npx bddgen; npx playwright test --grep /@BookDisplay/
- npx bddgen; npx playwright test --grep /@BookListingDisplay/
- npx bddgen; npx playwright test --grep /@BookSearch/
- npx bddgen; npx playwright test --grep /@BookSorting/
- npx bddgen; npx playwright test --grep /@CheckOrders/
- npx bddgen; npx playwright test --grep /@LogOut/
- npx bddgen; npx playwright test --grep /@PurchaseBook/
- npx bddgen; npx playwright test --grep /@UserLogin/
- npx bddgen; npx playwright test --grep /@UserRegisterAndLogin/

## 8. Test Deliverables
- Test scripts in the repository.

## 9. Install (Maybe you will need to do this)
- Clone the Repository : git clone https://github.com/PeterLukic/PlaywrightBDDBookstore.git
- Navigate to the Directory : cd PlaywrightBookstore
- Install Dependencies : npm install
- Install Playwright Browsers : npx playwright install
