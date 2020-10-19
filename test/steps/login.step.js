/*
 * @Author: Adam Dang
 * @Description: step case
 * @Date: 2020-10-19 14:44:47
 * @LastEditors: Adam Dang
 * @LastEditTime: 2020-10-19 17:42:23
 */

const { Given, When, Then } = require('cucumber');
const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

Given(/^I open my loginpage$/, () => {
    LoginPage.open();
});

When(/^I login into my account$/, () => {
    LoginPage.login('tomsmith', 'SuperSecretPassword!');
});

Then(/^Something is exit$/, () => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
});
