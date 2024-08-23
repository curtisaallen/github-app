import { GitHubUser } from "../interface/GitHubUser";
const GITHUB_API_URL = 'https://api.github.com';

export const fetchUser = async (username: string): Promise<GitHubUser> => {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
};

