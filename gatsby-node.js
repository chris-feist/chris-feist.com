const path = require('path');

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Alias semantic-less to our config directory
        '../../theme.config$': path.join(__dirname, 'src/css/theme.config')
      }
    }
  });
};
