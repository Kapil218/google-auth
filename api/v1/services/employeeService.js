import { pool } from "../../db/index.js";

export const getAllEmployees = async () => {
  try {
    const result = await pool.query("SELECT * from employees", []);
    return {
      success: true,
      data: result.rows,
    };
  } catch (err) {
    console.log("error=>", err);
    return {
      success: false,
      data: null,
    };
  }
};
