module.exports = {
  messages: {
    EUPS0001: {
      code: "EUPS0001",
      statusCode: 200,
      message: "Expense updated Successfully",
    },
  },
  errorMessages: {
    EUPE0001: {
      code: "EUPE0001",
      statusCode: 400,
      message: "User id is required",
    },
    EUPE0002: {
      code: "EUPE0002",
      statusCode: 401,
      message: "You are unauthorized",
    },
    EUPE0003: {
      code: "EUPE0003",
      statusCode: 404,
      message: "Data not Found",
    },
    EUPE0004: {
      code: "EUPE0004",
      statusCode: 400,
      message: "Amount is required",
    },
    EUPE0005: {
      code: "EUPE0005",
      statusCode: 400,
      message: "Reason is required",
    },
  },
};
