// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data, path } = context;
    const { user } = context.params;
    
    if(path != 'authentication') {
      // if( method == 'create' ) {
      var dt = new Date();

      data.created_at = dt;
      data.updated_at = dt;

      if( user ) {
        data.created_by = user._id;
        data.updated_by = user._id;
      }






      // } 
    }

    

    return context;
  };
};
