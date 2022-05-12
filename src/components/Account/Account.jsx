/**
 * React component for the Account
 * @param {Object} props - properties
 * @param {Number} props.amount - account amount
 * @param {String} props.description - description account
 * @param {String} props.title - title account
 * @component
 */
function Account({ amount, description, title }) {
  const stringAmount = numberWithCommas(amount)

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${stringAmount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

/**
 *
 * @param {Number} x - number to show with 2 decimals and with commas for thousand
 * @return {String}
 */
function numberWithCommas(x) {
  return x
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default Account
