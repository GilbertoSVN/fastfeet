import Mail from '../../lib/Mail';

class ConfirmationMail {
  get key() {
    return 'ConfirmationMail';
  }

  async handle({ data }) {
    const { packages, deliveryman, recipient } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda',
      template: 'confirmation',
      context: {
        deliveryman: deliveryman.name,
        name: recipient.name,
        street: recipient.street,
        number: recipient.number,
        complement: recipient.complement ? recipient.complement : '',
        state: recipient.state,
        city: recipient.city,
        cep: recipient.cep,
        id: packages.id,
        product: packages.product,
      },
    });
  }
}

export default new ConfirmationMail();
