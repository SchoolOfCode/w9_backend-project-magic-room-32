// export async function getWeekById(id) {
//   const res = await query(
//     `SELECT * FROM diary INNER JOIN progress
//      ON progress.week_id = diary.week
//     WHERE progress.week_id = $1 AND diary.week = $1;`,
//     [id]
//   );
//   console.log(res.rows[0]);
//   return res.rows[0];
// }
