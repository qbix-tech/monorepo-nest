import {
  type AnyColumn,
  type InferColumnsDataTypes,
  type SQL,
  sql,
} from "drizzle-orm";

const jsonAgg = <T extends Record<string, AnyColumn>>(
  select: T,
  nullFilterColumn?: AnyColumn,
) => {
  const chunks: SQL[] = [];

  Object.entries(select).forEach(([key, column], index) => {
    if (index > 0) chunks.push(sql`,`);
    chunks.push(sql.raw(`'${key}',`), sql`${column}`);
  });

  if (nullFilterColumn) {
    return sql<InferColumnsDataTypes<T>[]>`
    coalesce(
      json_agg(
        json_build_object(${sql.join(chunks)})
      ) FILTER (WHERE ${nullFilterColumn} IS NOT NULL),
      '[]'
    )
  `;
  }

  return sql<InferColumnsDataTypes<T>[]>`
    coalesce(
      json_agg(
        json_build_object(${sql.join(chunks)})
      ),
      '[]'
    )
  `;
};

export default jsonAgg;
