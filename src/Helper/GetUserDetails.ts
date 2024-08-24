import axios from "axios";

export const getUserDetails = async (token: string) => {
  // send request to server to get user details
  const response = await axios(`${process.env.NEXT_DOMAIN}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const userDetails = response.data;
  // console.log(response.data);
  return userDetails || {};
};
