const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ongExists = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

    if(!ongExists){
      return res.status(400).json({error: 'No ONG found with this ID.'})
    }

    return res.json(ongExists);
  }
}
