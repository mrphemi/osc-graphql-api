import { GraphQLError } from "graphql";

export const AuthenticationError = () => {
  return new GraphQLError("Invalid email or password", {
    extensions: {
      code: "INVALID_CREDENTIALS",
    },
  });
};

export const ForbiddenError = (errMessage: string) => {
  return new GraphQLError(errMessage, {
    extensions: {
      code: "FORBIDDEN",
    },
  });
};
