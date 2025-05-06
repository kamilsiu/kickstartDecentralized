// routes.js
const routes = require('next-routes')();

routes
  .add('index', '/')
  .add('campaigns', '/campaigns')
  .add('campaignsNew', '/campaigns/new')  // Add route for new campaign
  .add('campaign', '/campaigns/:address');

module.exports = routes;
