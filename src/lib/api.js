import ky from "ky";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// TODO: look into wtf this is messing up
class ApiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ApiError";
  }
  toString() {
    return this.message;
  }
}

const returnJsonError = async (error) => {
  const errorJson = await error.response.json();
  throw new ApiError(errorJson.error);
};

// localhost apis
const api_unauthenticated = ky.create({ prefixUrl: "/api" });

// if we need authenticated api calls to something....
const api = () => {
  api_unauthenticated.extend({
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "content-type": "application/json",
    },
  });
};

// unauthenticated jup apis
const jupiter_unauthenticated_api = ky.create({
    prefixUrl: "https://tokens.jup.ag",
  });

export const useAllTokens = () => {
  return useQuery({
    queryKey: ["tokens"],
    queryFn: async () => {
      const response = await jupiter_unauthenticated_api
        .get("tokens?tags=verified")
        .json()
        .catch(returnJsonError);
      console.log(response);

      return response;
    },
  });
};

// authenticated jup apis