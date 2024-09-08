import { S3Client } from '@aws-sdk/client-s3';

export const r2 = new S3Client({
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY as string,
  },
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_ENDPOINT as string,
});
