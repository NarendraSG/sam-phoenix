import { SQSEvent, SQSRecord } from "aws-lambda";

export async function handler(
  event: SQSEvent
): Promise<void> {
    console.log("Entering the QUEUE handler");
    event.Records.forEach((record:SQSRecord) => console.log(record.body));
    console.log("Exiting the QUEUE handler");
}
