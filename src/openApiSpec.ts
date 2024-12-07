export const specfile = {
  openapi: "3.0.0",
  info: {
    title: "User Api",
    description: "This API handles all users information",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  paths: {
    "/users": {
      get: {
        summary: "Get User List",
        description: "Retrieves a list of users based on name matching",
        parameters: [
          {
            in: "query",
            name: "name",
            schema: {
              type: "string",
            },
            required: false,
            description: "Name filter for user lookup",
          },
        ],
        responses: {
          "200": {
            description: "Gives you the list of users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "post - Get User List",
        description: "post - Retrieves a list of users based on name matching",
        parameters: [
          {
            in: "query",
            name: "name",
            schema: {
              type: "string",
            },
            required: false,
            description: "Name filter for user lookup",
          },
        ],
        responses: {
          "200": {
            description: "Gives you the list of users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            description: "Unique identifier for user",
          },
          name: {
            type: "string",
            description: "Name of user",
          },
        },
        required: ["id", "name"],
      },
    },
  },
};
