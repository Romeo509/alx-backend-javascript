import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
  
  // Check for errors in either promise resolution
  if (!photo || !user) {
    return { photo: null, user: null };
  }
  
  return { photo, user };
}
