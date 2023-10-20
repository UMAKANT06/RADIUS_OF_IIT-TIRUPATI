import dotenv from dotenv;
dotenv.config();
export const MONGO_URL=process.env.MONGO_URL??""
export const PORT=process.env.PORT??6001

const checkEnvVariable = (variable, name) => {
    if (!variable || variable.trim() === '') {
        throw new Error(`Environment variable '${name}' is missing or empty.`);
    }
};

//checking and giving error if there is an any null or undefined variable in this
checkEnvVariable(MONGO_URL,"MONGO_URL")