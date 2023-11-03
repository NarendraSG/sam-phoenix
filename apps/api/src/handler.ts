import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { adder } from "@nv-sam/lib";

export async function handler(
  event: APIGatewayProxyEvent
): APIGatewayProxyResult {
  try {
    console.log("hello world");
    // return "hello world";
    return {
      statusCode: 200,
      body: "Adding/....... " + adder(1, 6), 
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: "Hello World in catch",
    };
  }
}
