const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const teams=require("../pageobjects/teams.page");
const monofmatch=require("../pageobjects/mom.page");
const screenshot1Page = require('../pageobjects/screenshot1.page');
Given(/^I am on the home page$/,async () => {
	await browser.url("https://www.espncricinfo.com/");
    await browser.maximizeWindow();
});

When(/^I click teams,India,players$/,async () => {
  await teams.team();
});

Then(/^I should be able to view profile,take screenshot$/,async () => {
  await browser.pause(4000);
	// await screenshot1Page.ss();
});

// Given(/^I am again on the home page$/,async () => {
// 	await monofmatch.selectplay();
// });

// When(/^I click teams,fixtures,game,score$/,async () => {
// 	await monofmatch.mom();
// });

// Then(/^I should be able to view man of the match$/,async () => {
// 	await monofmatch.sst();
//   await browser.pause(3000);
// });
