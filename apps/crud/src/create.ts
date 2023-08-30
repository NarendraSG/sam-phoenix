import { DynamoDBClient } from "@nv-sam/dynamodb";

export async function handler(event: any) {
  try {
    const client = new DynamoDBClient({
      region: process.env.REGION,
      tableName: process.env.TABLE_NAME,
    });

    await client.put(JSON.parse(event.body));

    return {
      statusCode: 200,
      body: "Success",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}
