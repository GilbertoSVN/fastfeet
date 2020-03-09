import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipients from '../models/Recipients';

class RecipientsController {
  async index(req, res) {
    const { name } = req.query;

    const recipients = await Recipients.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    return res.json(recipients);
  }

  async show(req, res) {
    const { id } = req.params;

    const recipient = await Recipients.findByPk(id);

    if (recipient) return res.json(recipient);

    return res.status(400).json({ error: 'Recipient not found ' });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string()
        .required()
        .min(8)
        .max(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Failed to create recipient, verify your parameters' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await Recipients.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string()
        .required()
        .min(8)
        .max(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Failed to create recipient, verify your parameters' });
    }

    const { id, name, street, number, complement, state, city, cep } = req.body;

    const recipient = await Recipients.findOne({
      where: {
        id,
      },
    });

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    await Recipients.update(
      {
        name,
        street,
        number,
        complement,
        state,
        city,
        cep,
      },
      { where: { id } }
    );

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }
}
export default new RecipientsController();
