import {Given, When, Then, Before, After} from '@cucumber/cucumber'
import {PageActions} from "../pages/pageActions";
import {ElementMapper} from "../pages/elementMapper";

const page: PageActions = new PageActions();
Before(async function () {
    await page.init();
});
After(async function () {
    await page.close();
})

Given(/^I am on the test page$/, {timeout: 2 * 5000}, async function () {
    await page.open(ElementMapper.home);
});
Then(/^I close the popup$/, {timeout: 2 * 5000}, async function () {
    await page.clickElement(ElementMapper.closePopup);
});
When(/^I click the "([^"]*)" option$/, async function () {

});
Then(/^I should be able to see the "([^"]*)" on the list$/, async function () {

});
Then(/^The "([^"]*)" page should load successfully$/, async function () {

});
When(/^I select "([^"]*)" of the names$/, async function () {

});
When(/^I click the "([^"]*)" button$/, async function () {

});
Then(/^I should see "([^"]*)" name in the result box$/, async function () {

});
Then(/^I should see "([^"]*)" name in the data box$/, async function () {

});