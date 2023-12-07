const sharedServices = require("shared/services");
const sharedConstants = require("shared/constants");

const blogModels = {};

// @model-name: create
// @model-desc: create a new otp
blogModels.create = async ({ otp, phoneNo }) => {
  const result = await new sharedServices.mysqlServices()
    .insert(
      sharedConstants.dbTableNames.otp,
      sharedServices.mysqlHelperServices.parseInsertValues({
        otp,
        mobile: phoneNo,
      })
    )
    .build();

  return result;
};

// @model-name: read
// @model-desc: read otp based on filter
blogModels.read = async (whereParams) => {
  const where = [];

  if (whereParams.otp) {
    where.push(`otp=${whereParams.otp}`);
  }

  if (whereParams.phoneNo) {
    where.push(`mobile=${whereParams.phoneNo}`);
  }

  let result = new sharedServices.mysqlServices()
    .select(
      `
            otp,
            created_at
            `
    )
    .from(sharedConstants.dbTableNames.otp);

  if (where.length) {
    result = result.where(where.join(" AND "));
  }

  result = await result.build();

  return result;
};

// @model-name: update
// @model-desc: update sample based on update and where params
blogModels.update = async (updateParams, whereParams) => {
  const where = [];

  console.log(whereParams, updateParams);

  if (whereParams.userid) {
    where.push(`userid=${whereParams.userid}`);
  }

  const result = await new sharedServices.mysqlServices()
    .update(
      sharedConstants.dbTableNames.blog,
      sharedServices.mysqlHelperServices.parseUpdateValues({
        content: updateParams.content,
      })
    )
    .where(where.join(" AND "))
    .build();

  return result;
};

// @model-name: delete
// @model-desc: delete blog based on where params
blogModels.delete = async (whereParams) => {
  const where = [];

  if (whereParams.userid) {
    where.push(`userid='${whereParams.userid}'`);
  }

  const result = await new sharedServices.mysqlServices()
    .delete(sharedConstants.dbTableNames.blog)
    .where(where.join(" AND "))
    .build();

  return result;
};

module.exports = blogModels;
