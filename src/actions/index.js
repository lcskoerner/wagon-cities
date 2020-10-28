import cities from '../cities';

export default function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}
