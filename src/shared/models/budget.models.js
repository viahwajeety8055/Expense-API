const sharedServices = require("shared/services");
const sharedConstants = require("shared/constants");

const expenseModels = {};

// @model-name: create
// @model-desc: create a new budget
expenseModels.create = async ({ budget, totalExpense, userId, redAlert }) => {
  const result = await new sharedServices.mysqlServices()
    .insert(
      sharedConstants.dbTableNames.budget,
      sharedServices.mysqlHelperServices.parseInsertValues({
        budget: budget,
        total_expense: totalExpense,
        red_alert: redAlert,
        user_id: userId,
      })
    )
    .build();

  return result;
};

// @model-name: read
// @model-desc: read expense based on filter
expenseModels.read = async (whereParams) => {
  const where = [];

  if (whereParams.userId) {
    where.push(`user_id = ${whereParams.userId}`);
  }

  let result = new sharedServices.mysqlServices()
    .select(
      `
            id AS budgetId,
            budget AS budget,
            total_expense AS totalExpense,
            red_alert AS redAlert,
            user_id AS userId
            `
    )
    .from(sharedConstants.dbTableNames.budget);

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

  if (whereParams.userId) {
    where.push(`user_id=${whereParams.userId}`);
  }

  const result = await new sharedServices.mysqlServices()
    .update(
      sharedConstants.dbTableNames.budget,
      sharedServices.mysqlHelperServices.parseUpdateValues({
        budget: updateParams.budget,
        total_expense: updateParams.totalExpense,
        red_alert: updateParams.redAlert,
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
