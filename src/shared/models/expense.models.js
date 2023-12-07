const sharedServices = require("shared/services");
const sharedConstants = require("shared/constants");

const expenseModels = {};

// @model-name: create
// @model-desc: create a new expense
expenseModels.create = async ({ reason, amount, userId, isValid }) => {
  const result = await new sharedServices.mysqlServices()
    .insert(
      sharedConstants.dbTableNames.expense,
      sharedServices.mysqlHelperServices.parseInsertValues({
        reason: reason,
        amount: amount,
        user_id: userId,
        isValid: isValid,
      })
    )
    .build();

  return result;
};

// @model-name: read
// @model-desc: read expense based on filter
expenseModels.read = async (whereParams) => {
  const where = [];

  if (whereParams.email) {
    where.push(`email="${whereParams.email}"`);
  }

  if (whereParams.userId) {
    where.push(`user_id=${whereParams.userId}`);
  }

  if (whereParams.isValid) {
    where.push(`isValid=${whereParams.isValid}`);
  }

  if (whereParams.currentDate) {
    where.push(`created_at='${whereParams.currentDate}'`);
  }

  if (whereParams.expenseId) {
    where.push(`id=${whereParams.expenseId}`);
  }

  let result = new sharedServices.mysqlServices()
    .select(
      `
            id AS id,
            reason AS reason,
            amount AS amount,
            user_id AS userId,
            isValid AS isValid,
            created_at AS createdAt,
            updated_at AS updatedAt
            `
    )
    .from(sharedConstants.dbTableNames.expense);

  if (where.length) {
    result = result.where(where.join(" AND "));
  }

  result = await result.build();

  return result;
};

// @model-name: update
// @model-desc: update expense based on update and where params
expenseModels.update = async (updateParams, whereParams) => {
  const where = [];

  if (whereParams.expenseId) {
    where.push(`id=${whereParams.expenseId}`);
  }

  if (whereParams.userId) {
    where.push(`user_id=${whereParams.userId}`);
  }

  const result = await new sharedServices.mysqlServices()
    .update(
      sharedConstants.dbTableNames.expense,
      sharedServices.mysqlHelperServices.parseUpdateValues({
        reason: updateParams.reason,
        amount: updateParams.amount,
        isValid: updateParams.isValid,
      })
    )
    .where(where.join(" AND "))
    .build();

  return result;
};

// @model-name: delete
// @model-desc: delete sample based on where params
expenseModels.delete = async (whereParams) => {
  const where = [];

  if (whereParams.name) {
    where.push(`healthcheck_report_ref_id='${whereParams.name}'`);
  }

  const result = await new sharedServices.mysqlServices()
    .delete(sharedConstants.dbTableNames.sampleDb)
    .where(where.join(" AND "))
    .build();

  return result;
};

module.exports = expenseModels;
