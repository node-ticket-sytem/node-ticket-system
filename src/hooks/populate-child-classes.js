/* eslint-disable require-atomic-updates */
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;
    // Function that adds the user to a single message object
    const addChild = async parent => {
      // Get the user based on their id, pass the `params` along so
      // that we get a safe version of the user data
      console.log(parent._id);
      let children = await app.service('cmdb-class').find({
        query: {
          parent: parent._id
        }
      }, params);

      console.log(children);

      children = children.data;

      // Merge the message content to include the `user` object
      return {
        ...parent,
        children
      };
    };

    // In a find method we need to process the entire page
    if (method === 'find') {
      // Map all data to include the `user` information
      context.result.data = await Promise.all(result.data.map(addChild));
    } else {
      // Otherwise just update the single result
      context.result = await addChild(result);
    }

    return context;
  };
};