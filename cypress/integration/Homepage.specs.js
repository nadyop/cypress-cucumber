const Homepage = require('../support/pages/Homepage')
const HomepageData = require('../support/datatest/HomepageData');

let homepage = new Homepage();

describe('BDD Atlas', () => {
    it('Visit BDD Atlas Web', () => {
        homepage.visit('');
    })
    
    it('Type a Quote', () => {
        homepage.type_quote(HomepageData.datatest.quote);
    })
    it('Click dropdown color', () => {
        homepage.sel_color(HomepageData.datatest.quote_color);
    })
    it('Submit a quote', () => {
        homepage.submit_quote(HomepageData.datatest.quote_color,HomepageData.datatest.quote);
    })
    it('Clear specific quote', () => {
        homepage.clear_quote(HomepageData.datatest.quote);
    })

})