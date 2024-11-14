export interface UploadInput {
  file: Buffer;
  filename: string;
  mimetype?: string;
}

export interface ImageUploadProvider {
  upload(data: UploadInput): Promise<string>;
}
