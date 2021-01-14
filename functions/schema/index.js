const { gql } = require('apollo-server-lambda');
const { readFileSync } = require('fs'),
    path = require('path');

const stitchSchema = () => {
    return new Promise((resolve, reject) => {
        const schema = gql`
            ${readFileSync(path.join(__dirname, '/blogs.gql')).toString()}
            type Query
            type Mutation
        `;
        resolve(schema);
    });
}

module.exports = stitchSchema;