import connection from '../../database/connection';

class IncidentController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const ongsAttributes = ['ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'];

    const [count] = await connection('incidents')
      .count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incidents.*', ...ongsAttributes]);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents);
  }

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }

  async delete(req, res) {
    const { incident_id } = req.params;
    const ong_id = req.headers.authorization;

    if (!incident_id || !ong_id) {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    const incident = await connection('incidents')
      .where('id', incident_id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operação não permitida.' });
    }

    await connection('incidents').where('id', incident_id).delete();

    return res.status(204).send();
  }
}

export default new IncidentController();
