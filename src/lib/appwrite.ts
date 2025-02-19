import 'server-only';
import { Account, Client, Storage, Users, Databases } from 'node-appwrite';

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!)
    .setKey(process.env.NEXT_API_KEY_APPWRITE!);

  return {
    get account() {
      return new Account(client);
    },
  };
}
