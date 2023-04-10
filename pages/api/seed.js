import User from '@/models/User';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = async (req, res) => {
  await db.dbConnect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.dbDisconnect();
  res.send({ message: 'seeded successfully' });
};

export default handler;
