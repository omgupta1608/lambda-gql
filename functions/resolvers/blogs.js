const getBlogs = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve('ALL BLOGS')
    });
}

const getBlogById = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve('A SINGLE BLOG OF ID ' + args.ID)
    });
}

module.exports = {
    blogQueries: {
        getBlogs,
        getBlogById
    }
}