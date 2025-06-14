const { expect } = require("@playwright/test");
const path = require('path');

class PageQaTask {
    constructor(page) {
        this.page = page;
        this.buttonAcceptCookies = page.locator('button.cky-btn-accept[data-cky-tag="accept-button"]');
        this.inputFirstName = page.locator('#input_7_5');
        this.labelValidationFirstName = page.locator('#validation_message_7_5');
        this.inputLastName = page.locator('#input_7_18');
        this.labelValidationLastName = page.locator('#validation_message_7_18');
        this.inputEmail = page.locator('#input_7_17');
        this.labelValidationEmail = page.locator('#validation_message_7_17');
        this.inputPhoneNumber = page.locator('#input_7_8');
        this.inputProjectDetails = page.locator('#input_7_15');
        this.buttonSelectFile = page.locator('#gform_browse_button_7_3');
        this.selectFileInput = page.locator('#gform_multifile_upload_7_3 input[type="file"]');
        this.labelUploadedFileName = page.locator('.gfield_fileupload_filename');
        this.labelUploadPercentage = page.locator('.gfield_fileupload_percent');
        this.checkboxPrivacyPolicy = page.locator('#input_7_16_1');
        this.labelValidationPrivacyPolicy = page.locator('#validation_message_7_16');
        this.buttonSendMessage = page.locator('#gform_submit_button_7');
        this.selectHowDidYouHearAboutUs = page.locator('#input_7_9_chosen a.chosen-single');
        this.optionsHowDidYouHear = page.locator('#input_7_9_chosen .chosen-results li');
        this.selectedHowDidYouHearText = page.locator('#input_7_9_chosen a.chosen-single span');
        this.labelConfirmationMessage = page.locator('#gform_confirmation_message_7');
        

        this.validationElements = {
            'first name': this.labelValidationFirstName,
            'last name': this.labelValidationLastName,
            'email': this.labelValidationEmail,
            'privacy policy': this.labelValidationPrivacyPolicy
        };
        
        this.defaultValidationMessages = {
            'first name': 'This field is required.',
            'last name': 'This field is required.',
            'email': 'This field is required.',
            'privacy policy': 'You must accept our Privacy Policy.'
        };
    }

    async goToPageQaTask(url) {
        await this.page.goto(url, { waitUntil: "networkidle" });
    }

    async verifyUrlQaTask(expectedUrlPart) {
        await expect(this.page).toHaveURL(new RegExp(expectedUrlPart));
        if (await this.buttonAcceptCookies.isVisible()) {
            await this.buttonAcceptCookies.click();
        }
    }
    async verifyFieldValidation(fieldName, expectedMessage = null) {
        const fieldKey = fieldName.toLowerCase();
        const validationElement = this.validationElements[fieldKey];
        
        if (!validationElement) {
            throw new Error(`Validation element not found for field: ${fieldName}`);
        }
        
        const message = expectedMessage || this.defaultValidationMessages[fieldKey];
        
        await expect(validationElement).toBeVisible();
        await expect(validationElement).toHaveText(message);
    }


    /*async verifyFirstNameValidation(expectedMessage = "This field is required.") {
        await this.verifyFieldValidation('first name', expectedMessage);
    }

    async verifyLastNameValidation(expectedMessage = "This field is required.") {
        await this.verifyFieldValidation('last name', expectedMessage);
    }

    async verifyEmailValidation(expectedMessage = "This field is required.") {
        await this.verifyFieldValidation('email', expectedMessage);
    }

    async verifyPrivacyPolicyValidation(expectedMessage = "You must accept our Privacy Policy.") {
        await this.verifyFieldValidation('privacy policy', expectedMessage);
    }*/

    async fillFirstName(firstName) {
        await this.inputFirstName.fill(firstName);
        await expect(this.inputFirstName).toHaveValue(firstName);
    }

    async fillLastName(lastName) {
        await this.inputLastName.fill(lastName);
        await expect(this.inputLastName).toHaveValue(lastName);
    }

    async fillEmail(email) {
        await this.inputEmail.fill(email);
        await expect(this.inputEmail).toHaveValue(email);
    }

    async fillPhoneNumber(phoneNumber) {
        await this.inputPhoneNumber.fill(phoneNumber);
        await expect(this.inputPhoneNumber).toHaveValue(phoneNumber);
    }

    async selectAboutUs(optionText) {
        await this.selectHowDidYouHearAboutUs.click();
        await this.optionsHowDidYouHear.filter({ hasText: optionText }).first().click();
        const selectedText = await this.selectedHowDidYouHearText.textContent();
        expect(selectedText.trim()).toBe(optionText);
    }

    async selectService(serviceName) {
        const labelService = this.page.locator(`label`, { hasText: serviceName });
        await labelService.click();
        const forAttrService = await labelService.getAttribute('for');
        const checkboxService = this.page.locator(`#${forAttrService}`);
        await expect(checkboxService).toBeChecked();
    }

    async fillProjectDetails(projectDetails) {
        await this.inputProjectDetails.fill(projectDetails);
        await expect(this.inputProjectDetails).toHaveValue(projectDetails);
    }

    async uploadFile(filename) {
        const filePath = path.resolve(__dirname, '../utils/', filename);
        await this.selectFileInput.waitFor({ state: 'attached' });
        await this.selectFileInput.setInputFiles(filePath);
    }

    async verifyFileUploaded(filename) {
        await expect(this.labelUploadPercentage).toHaveText('100%');
        await expect(this.labelUploadedFileName).toHaveText(filename);
    }

    async acceptPrivacyPolicy() {
        await this.checkboxPrivacyPolicy.check();
        await expect(this.checkboxPrivacyPolicy).toBeChecked();
    }

    async clickButtonSendMessage() {
        await this.buttonSendMessage.waitFor({ state: 'visible' });
        await expect(this.buttonSendMessage).toBeEnabled();
        await this.buttonSendMessage.click();
    }

    async verifyConfirmationMessage(message) {
        await expect(this.labelConfirmationMessage).toBeVisible();
        await expect(this.labelConfirmationMessage).toHaveText(message);
    }
}

module.exports = { PageQaTask };