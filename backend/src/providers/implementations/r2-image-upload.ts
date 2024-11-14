import { Upload } from '@aws-sdk/lib-storage';
import { randomUUID } from 'crypto';
import { r2 } from '../../lib/cloudflare';
import { type ImageUploadProvider, type UploadInput } from '../image-upload';

export class R2ImageUploadProvider implements ImageUploadProvider {
  async upload({ file, filename }: UploadInput): Promise<string> {
    const uploadImageToS3 = new Upload({
      client: r2,
      leavePartsOnError: false,
      params: {
        Bucket: process.env.R2_BUCKET,
        Key: randomUUID().concat(filename),
        Body: file,
        ContentType: 'image/png',
      },
    });

    const uploadedImage = await uploadImageToS3.done();
    return uploadedImage.Key as string;
  }
}
