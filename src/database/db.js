import sql from "mssql";

const dbSettings = {
    user: "developer",
    password: "@1Cordoba2423",
    server: "localhost",
    database: "webstore",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;

    } catch (error) {
        console.log(error.message);
    }
}

