const { blogQueries } = require('./blogs');

module.exports = {
    Query:{
        ...blogQueries
    }
}