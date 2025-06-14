import { Given, When, Then } from '../support/fixtures';
const data = require('../../utils/data.json');

const pageQaTask = (pageManager) => pageManager.getPageQaTask();

Given('I navigate to the qa task page', async ({ pageManager }) => {
    await pageQaTask(pageManager).goToPageQaTask(data.url + 'qa_task');
});

Then('I should see the qa task page', async ({ pageManager }) => {
    await pageQaTask(pageManager).verifyUrlQaTask(data.url + 'qa_task');
})

Then('I fill first name with value {string}', async ({ pageManager }, firstName) => {
    await pageQaTask(pageManager).fillFirstName(firstName);
})

Then('I fill last name with value {string}', async ({ pageManager }, lastName) => {
    await pageQaTask(pageManager).fillLastName(lastName);
})

Then('I fill email with value {string}', async ({ pageManager }, email) => {
    await pageQaTask(pageManager).fillEmail(email);
})

Then('I fill phone with value {string}', async ({ pageManager }, phoneNumber) => {
    await pageQaTask(pageManager).fillPhoneNumber(phoneNumber);
})

Then('I select {string} from how did you hear about us', async ({ pageManager }, optionText) => {
    await pageQaTask(pageManager).selectAboutUs(optionText);
})

Then('I select service {string}', async ({ pageManager }, serviceName) => {
    await pageQaTask(pageManager).selectService(serviceName);
})

Then('I fill project details with value {string}', async ({ pageManager }, projectDetails) => {
    await pageQaTask(pageManager).fillProjectDetails(projectDetails);
})

Then('I upload file {string} from utils folder', async ({ pageManager }, filename) => {
    await pageQaTask(pageManager).uploadFile(filename);
})

Then('I should see file {string} was uploaded', async ({ pageManager }, filename) => {
    await pageQaTask(pageManager).verifyFileUploaded(filename);
})

Then('I click privacy policy checkbox', async ({ pageManager }) => {
    await pageQaTask(pageManager).acceptPrivacyPolicy();
})


Then('I click on button Send message', async ({ pageManager }) => {
    await pageQaTask(pageManager).clickButtonSendMessage();
})

When('I fill all data I need to see message {string}', async ({ pageManager }, message) => {
    await pageQaTask(pageManager).verifyConfirmationMessage(message);
})


Then('I should see {string} validation message {string}', async ({ pageManager }, fieldName, expectedMessage) => {
    await pageQaTask(pageManager).verifyFieldValidation(fieldName, expectedMessage);
})





