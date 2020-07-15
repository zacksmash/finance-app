/**
 * Formats cents to pretty/plain dollars
 *
 * @param  amount
 * @return string
 */
export default {
  methods: {
    prettyFormat: function (amount) {
      const sign = Math.sign(amount);
      const isPositive = (sign === 0 || sign === 1);
      const segments = parseFloat(
        amount
        .toString()
        .replace(/-/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ','))
        .toFixed(2)
        .split('.');

      const dollars = segments[0];
      const cents = `<span>${segments[1]}</span>`;

      return {
        value: `$${dollars}.${cents}`,
        sign: isPositive ? 'positive' : 'negative'
      };
    },

    plainFormat: function (amount) {
      return parseFloat(amount).toFixed(2);
    }
  }
}
