import { DynamoDB } from "aws-sdk";

export interface DynamoDBClientOptions {
  region: string;
  tableName: string;
  endpoint?: string;
}

export interface DynamoDBItem {
  [key: string]: any;
}

export class DynamoDBClient {
  private readonly client: DynamoDB.DocumentClient;
  private readonly tableName: string;

  constructor(options: DynamoDBClientOptions) {
    this.client = new DynamoDB.DocumentClient({
      region: options.region,
      endpoint: options.endpoint ?? undefined,
    });

    this.tableName = options.tableName;
  }

  async get(key: DynamoDBItem): Promise<DynamoDBItem | null> {
    const result = await this.client
      .get({
        TableName: this.tableName,
        Key: key,
      })
      .promise();

    return result.Item ?? null;
  }

  async put(item: DynamoDBItem): Promise<void> {
    await this.client
      .put({
        TableName: this.tableName,
        Item: item,
      })
      .promise();
  }

  async update(
    key: DynamoDBItem,
    updateExpression: string,
    expressionAttributeValues: DynamoDBItem
  ): Promise<void> {
    await this.client
      .update({
        TableName: this.tableName,
        Key: key,
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues,
      })
      .promise();
  }

  async delete(key: DynamoDBItem): Promise<void> {
    await this.client
      .delete({
        TableName: this.tableName,
        Key: key,
      })
      .promise();
  }
}
