(function () {
  "use strict";

  var Porter = require('./node-porter').Porter;

  var WordpressAPI = {

    plugins: {
      list: ['post', 'getPlugins'],
      status: ['post', 'statusPlugin'],
      activate: ['post', 'activatePlugin'],
      deactivate: ['post', 'deactivatePlugin'],
    },

    options: {
      list: ['post', 'getOptions'],
    },

    maintenance: {
      status: ['post', 'getMaintenance'],
      update: ['post', 'setMaintenance'],
    },


  };

  function WpAPI() {
    return new Porter(WordpressAPI).use({
      endpoint: "/wp-admin/admin-ajax.php?action=read_rest_api_request&req="
    });
  }
  module.exports = WpAPI;

}());