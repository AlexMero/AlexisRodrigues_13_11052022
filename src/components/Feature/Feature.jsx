/**
 * React component for the feature
 * @param {Object} props - properties
 * @param {String} props.title - feature title
 * @param {String} props.description - feature description
 * @param {String} props.iconName - asset icon name for feature
 * @component
 */
function Feature({ title, description, iconName }) {
  const icon = require('../../assets/' + iconName + '.png')
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Feature
