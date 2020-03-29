import connection from '../../database/connection';
import crypto from 'crypto';

class OngController {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const ong_id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id: ong_id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return res.json(ong_id);
  }
}

export default new OngController();
