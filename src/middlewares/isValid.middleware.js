export const isValid = ({ schema }) => {
    return async (req, res, next) => {
      const { error, value } = schema.validate(req.body);
  
      if (error) {
        return res
          .status(400)
          .json({ success: false, message: error.details[0].message });
      }
  
      return next();
    };
  };
  