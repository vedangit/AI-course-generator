/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:IxAY4t2dFzSQ@ep-snowy-union-a54yyerf.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };