import { DynamoDBClient } from "@nv-sam/dynamodb";

export async function handler(event: any) {
  try {
    const client = new DynamoDBClient({
      region: process.env.REGION,
      tableName: process.env.TABLE_NAME,
    });

    const result = await client.update(
      {
        id: parseInt(event.queryStringParameters.id ?? "0"),
      },
      "set userName = :userName",
      { ":userName": "Sam" }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}
