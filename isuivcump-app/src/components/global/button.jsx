import React from 'react';
import PropTypes from 'prop-types';

// Composant Button réutilisable
const Button = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition ease-in-out duration-200 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Définir les types de props pour plus de sécurité
Button.propTypes = {
  label:        PropTypes.string.isRequired,  // Le texte du bouton
  onClick:      PropTypes.func,  // Fonction appelée lors du clic sur le bouton
  type:         PropTypes.string,   // Type du bouton (submit, reset, button)
  className:    PropTypes.string,  // Classes CSS supplémentaires
  disabled:     PropTypes.bool,     // Désactiver le bouton
};

// Valeurs par défaut des props
Button.defaultProps = {
  type: 'button',
  className: '',
  disabled: false,
};

export default Button;
