# Test Plan - QA Task Contact Form

## 1. Test Objectives

The objective of this test plan is to ensure that the QA Task Contact Form functions correctly by:
- Verifying form submission with valid data.
- Validating proper error handling for invalid/missing data.
- Maintaining form functionality and user experience.
- Identifying potential defects before deployment.

## 2. Test Scope

This test plan covers end-to-end testing of the contact form functionality in the QA Task application. The tests will focus on:
- Functional testing of form fields and validation.
- UI testing for proper display and interaction.
- Form submission workflows.
- File upload functionality.
- Automation using JavaScript and Playwright + PlaywrightBDD.

## 3. High-Level Test Cases

### 3.1 WearenotchQaTask.feature
- @SendMessageValidData
- @SendMessageInvalidData
- @SendMessageFailed

## 4. Test Case Details

### 4.1 @SendMessageValidData
**Purpose**: Verify successful form submission with all required fields filled correctly.

**Test Steps**:
- Navigate to QA task page
- Fill all required form fields with valid data
- Upload a file
- Accept privacy policy
- Submit the form
- Verify success message

### 4.2 @SendMessageInvalidData
**Purpose**: Verify proper validation messages are displayed when required fields are empty.

**Test Steps**:
- Navigate to QA task page
- Attempt to submit form without filling required fields
- Verify validation messages for each required field

### 4.3 @SendMessageFailed
**Purpose**: Verify specific validation message for first name field failure.

**Test Steps**:
- Navigate to QA task page
- Attempt to submit form without filling any fields
- Verify specific validation message for first name field

## 5. Tools and Frameworks

- **Test Framework**: Playwright
- **Programming Language**: JavaScript
- **Test Runner**: Playwright Test Runner
- **BDD Framework**: PlaywrightBDD

## 6. Test Environment

- **Browser**: Chromium, Firefox, Microsoft Edge
- **Operating System**: Windows 10, Mac OS, Linux
- **Test Data**: Sample contact form data

## 7. Form Fields Under Test

- **First Name** (Required)
- **Last Name** (Required)
- **Email** (Required)
- **Phone** (Optional)
- **How did you hear about us** (Dropdown)
- **Service Selection** (AI Discovery)
- **Project Details** (Text area)
- **File Upload** (PDF support)
- **Privacy Policy Checkbox** (Required)

## 8. Run Tests

### Run All Tests:
```bash
npx bddgen; npx playwright test
```

### Run Specific Tests:
- **Valid Data Test**: 
  ```bash
  npx bddgen; npx playwright test --grep /@SendMessageValidData/
  ```
- **Invalid Data Test**: 
  ```bash
  npx bddgen; npx playwright test --grep /@SendMessageInvalidData/
  ```
- **Failed Validation Test**: 
  ```bash
  npx bddgen; npx playwright test --grep /@SendMessageFailed/
  ```

## 9. Expected Results

### Valid Data Scenario:
- Form accepts all valid inputs
- File upload works correctly
- Success message: "Thanks for contacting us! We will get in touch with you shortly."

### Invalid Data Scenario:
- Validation messages appear for required fields:
  - First Name: "This field is required."
  - Last Name: "This field is required."
  - Email: "This field is required."
  - Privacy Policy: "This field is required."

## 10. Test Deliverables

- Test scripts in the repository
- Feature file: `WearenotchQaTask.feature`
- Test execution reports

## 11. Installation & Setup

### Prerequisites:
- Node.js installed
- Git installed

### Setup Steps:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/PeterLukic/NotchPlaywrightBDD
   ```

2. **Navigate to Directory**:
   ```bash
   cd NotchPlaywrightBDD
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Install Playwright Browsers**:
   ```bash
   npx playwright install
   ```

## 12. Test Data Requirements

- Valid test data for form fields
- Test file: `myFile.pdf` (located in utils folder)
- Various invalid data scenarios for negative testing

## 13. Risk Assessment

**Low Risk**: Basic form functionality
**Medium Risk**: File upload functionality
**High Risk**: Form validation and error handling

## 14. Success Criteria

- All test scenarios pass successfully
- Form validation works as expected
- File upload functionality operates correctly
- Success and error messages display appropriately