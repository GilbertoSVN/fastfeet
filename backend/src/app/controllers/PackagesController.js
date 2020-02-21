import * as Yup from 'yup';
import Packages from '../models/Packages';
import Recipients from '../models/Recipients';
import Couriers from '../models/Couriers';

import ConfirmationMail from '../jobs/ConfirmationMail';
import Queue from '../../lib/Queue';

class PackagesController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.string().required(),
      deliveryman_id: Yup.string().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const { recipient_id, deliveryman_id } = req.body;

    const recipient = await Recipients.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found' });
    }

    const courier = await Couriers.findByPk(deliveryman_id);

    if (!courier) {
      return res.status(400).json({ error: 'Courier not found' });
    }

    const { id, product } = await Packages.create(req.body);

    await Queue.add(ConfirmationMail.key, {
      packages: {
        id,
        product,
      },
      deliveryman: {
        name: courier.name,
        email: courier.email,
      },
      recipient: {
        name: recipient.name,
        street: recipient.street,
        number: recipient.number,
        complement: recipient.complement,
        state: recipient.state,
        city: recipient.city,
        cep: recipient.cep,
      },
    });

    return res.json({ id, recipient_id, deliveryman_id, product });
  }

  async index(_, res) {
    const packages = await Packages.findAll();

    return res.json(packages);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }
    const { id } = req.body;

    const packages = await Packages.findByPk(id);

    if (packages.date_end || packages.canceled_at) {
      return res.status(400).json({
        error: "You can't update a packages that has already started",
      });
    }

    const { deliveryman_id } = req.body;

    const { deliveryman_id: newDeliveryman_id } = await packages.update(
      req.body
    );

    if (deliveryman_id !== newDeliveryman_id) {
      return res.json();
    }

    return res.json(`Package ${id} updated`);
  }

  async delete(req, res) {
    const { id } = req.body;
    const { deliveryman_id } = req.params;

    const packages = await Packages.findByPk(id);

    if (!packages) {
      return res.status(400).json({ error: 'Package not found ' });
    }

    if (packages.deliveryman_id !== deliveryman_id) {
      return res
        .status(400)
        .json({ error: "You can't cancel a package that is not yours" });
    }

    if (packages.end_date) {
      return res
        .status(400)
        .json({ error: "Can't cancel a finished delivery " });
    }

    packages.canceled_at = new Date();

    await packages.save();

    return res.json(packages);
  }
}

export default new PackagesController();
