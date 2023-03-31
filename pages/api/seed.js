import db from "../../utils/connectdb";
import User from "../../models/User";
import data from "../../utils/data";

const handler = async (req, res) => {
    await db.connectdb();
    await User.deleteMany();
    await User.insertMany(data.users);
    await db.disconnectdb();
    res.send({ message: "seeded successfully" });
}

export default handler;