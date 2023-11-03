import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {SQS} from "@aws-sdk/client-sqs";

export async function handler(
  event: APIGatewayProxyEvent
): APIGatewayProxyResult {
  try {
    console.log("In the injector function...", process.env.QUEUE_URL)
    const sqs= new SQS();

    await sqs.sendMessage({MessageBody: JSON.stringify({name: event.queryStringParameters.name}), QueueUrl: process.env.QUEUE_URL})

    console.log("Exiting from injector")

    return {
      statusCode: 200,
      body: "Msg pushed to the Queue",
    };
  } catch (error) {
    console.log("ERROR", error);
    return {
      statusCode: 200,
      body: "Hello World in catch",
    };
  }
}
