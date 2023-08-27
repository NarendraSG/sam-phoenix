import { DynamoDBClient } from "@nv-sam/dynamodb";

export async function handler(event: any) {
  try {
    const client = new DynamoDBClient({
      region: process.env.REGION,
      tableName: process.env.TABLE_NAME,
    });

    const result = await client.get({
      id: 1, //event.queryStringParameters.id,
    });

    if (result) {
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } else {
      return {
        statusCode: 404,
        body: "Not Found.......",
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}
