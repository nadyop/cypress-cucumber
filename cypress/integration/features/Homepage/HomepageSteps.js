/*global Given, When, Then */
const Homepage = require('../../../support/pages/Homepage');
let homepage = new Homepage();

// regex for exact sentence ^ and $
Given(/^I open BDD Atlas Web$/,()=>{
    homepage.visit('');
})

//regex for regular expression
When(/^I type a quote: (.+)$/,(quote)=> {
    homepage.type_quote(quote);
})

// alphanumeric >1
And(/^I choose the (\w+) color$/,(color)=>{
    homepage.sel_color(color);
})

Then(`I verify quote submitted {string} and {string}`,(color,quote)=>{
    homepage.submit_quote(color,quote);
})

Then(/^I verify quote has been deleted: (.+)$/,(quote)=>{
    homepage.clear_quote(quote);
})