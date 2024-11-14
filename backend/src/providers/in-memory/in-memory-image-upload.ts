import { randomUUID } from 'node:crypto';
import { type ImageUploadProvider, type UploadInput } from '../image-upload';

export class InMemoryImageUploadProvider implements ImageUploadProvider {
  public uploads: UploadInput[] = [];

  async upload(data: UploadInput): Promise<string> {
    this.uploads.push(data);
    return randomUUID().concat(data.filename);
  }
}
