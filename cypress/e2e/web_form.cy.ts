// cypress/integration/my_test_spec.js

const uri = 'https://www.selenium.dev/selenium/web/web-form.html';
const text_input_field = '[id="my-text-id"]';
const input_text = 'test input';
const password_field = '[name="my-password"]';
const disabled_field = '[name="my-disabled"]';
const return_to_index_link = '[class="form-group tp-align-right mt-3"]';
const return_to_index_text = 'Return to index';
const dropdown_selector = '[name="my-select"]';
const dropdown_option = 'Three';
const dropdown_value = '3';
const datalist_input_selector = '[list="my-options"]';
const datalist_option_value = 'New York';
const file_input_selector = '[type="file"]';
const file_name_selector = '[name="my-file"]';
const file_upload_name = 'file_to_upload.txt';
const file_path = 'C:\\fakepath\\file_to_upload.txt';
const checkbox_1 = '[id="my-check-1"]';
const checkbox_2 = '[id="my-check-2"]';
const radiobox_1 = '[id="my-radio-1"]';
const radiobox_2 = '[id="my-radio-2"]';
const submit_button = '[type="submit"]';
const submit_button_message = '.display-6';
const submit_message_text = 'Form submitted';
const color_field = '[name="my-colors"]';
const color_code = 'd22b2b';
const date_picker = '[name="my-date"]';
const current_date = new Date();
const today_date = `${current_date.getFullYear()}-${(current_date.getMonth() + 1).toString().padStart(2, '0')}-${current_date.getDate().toString().padStart(2, '0')}`;
const slider_range = '[name="my-range"]';
const slider_value = 10;

describe('Selenium Web Form', function () {
  it('Input Text Field', function () {
    // Visit the website
    cy.visit(uri);

    // Input text into the field username field
    cy.get(text_input_field).type(input_text);

    // Verify that the input field contains the expected text
    cy.get(text_input_field).should('have.value', input_text);

  });


  it('Password Input Field', function () {
    // Visit the website
    cy.visit(uri);

    // Verify the type attribute of the password field
    cy.get(password_field).should('have.attr', 'type', 'password');

  });


  it('Disabled Field', function () {
    // Visit the website
    cy.visit(uri);

    // Verify that the disabled field is indeed disabled
    cy.get(disabled_field).should('be.disabled');

  });


  it('Return to Index Link (Tricky Selector)', function () {
    // Visit the website
    cy.visit(uri);

    // Click on the link with text 'return to index' inside the complex selector
    cy.get(return_to_index_link).contains(return_to_index_text).click();

    // Verify that the web page has changed.
    cy.url().should('not.eq', uri);

  });


  it('Select from Dropdown', function () {
    // Visit the website
    cy.visit(uri);

    // Select the option with the name "Three" from the dropdown
    cy.get(dropdown_selector).select(dropdown_option);

    // Verifies the dropdown now displays the option "Three"
    cy.get(dropdown_selector).should('have.value', dropdown_value);

  });


  it('Select from Datalist', function () {
    // Visit the website
    cy.visit(uri);

    //Type 'New York' into the input field, and select it from datalist
    cy.get(datalist_input_selector).type(datalist_option_value);
    cy.get(datalist_input_selector).type('{downarrow}').click();

    //Verifies the datalist now has value 'New York'
    cy.get(datalist_input_selector).should('have.value', datalist_option_value);

  });


  it('Uploads a File', function () {
    // Visit the website
    cy.visit(uri);

    // Attach a file to the file input
    cy.get(file_input_selector).attachFile(file_upload_name);
    cy.get(file_input_selector).click();

    // Assert that the file name and file path are correctly uploaded
    cy.get(file_name_selector).should('have.value', file_path);

  });


  it('Checkbox Tests', function () {
    // Visit the website
    cy.visit(uri);

    //Verifies the initial state of the checkboxes
    cy.get(checkbox_1).should('be.checked');
    cy.get(checkbox_2).should('not.be.checked');

    //Changes the state of both checkboxes
    cy.get(checkbox_1).click();
    cy.get(checkbox_2).click();

    //Verifies both checkboxes have changed correctly
    cy.get(checkbox_1).should('not.be.checked');
    cy.get(checkbox_2).should('be.checked');

  });


  it('Radiobox Tests', function () {
    // Visit the website
    cy.visit(uri);

    //Verifies the initial state of the radio boxes
    cy.get(radiobox_1).should('be.checked');
    cy.get(radiobox_2).should('not.be.checked');

    //Changes the state of both radio boxes
    cy.get(radiobox_2).click();

    //Verifies both radio boxes have changed correctly
    cy.get(radiobox_1).should('not.be.checked');
    cy.get(radiobox_2).should('be.checked');

  });


  it('Clicks Submit Button', function () {
    // Visit the website
    cy.visit(uri);

    //Clicks the submit button
    cy.get(submit_button).click();

    //Verifies that the submit message is visible
    cy.get(submit_button_message).should('have.text', submit_message_text);

  });


  it('Choose Color', () => {
    //Visit the website
    cy.visit(uri);

    // Click the button to open the color picker
    cy.get(color_field).click();

    // Set the value of the color picker, and verify the color code
    cy.get(color_field).invoke('val', `#${color_code}`).should('have.value', `#${color_code}`);

  });


  it('Choose Date', () => {
    //Visit the website
    cy.visit(uri);

    //Set the value of today's date
    cy.get(date_picker).type(today_date);

    //Verifies that today's date was set properly
    cy.get(date_picker).should('have.value', today_date);

  });


  it('Select Slider', () => {
    //Visit the website
    cy.visit(uri);

    //Set the slider to value 10
    cy.get(slider_range).invoke('val', slider_value).trigger('input');

    //Verifies that the slider is at value 10
    cy.get(slider_range).should('have.value', slider_value.toString());

  });
}); // Describe