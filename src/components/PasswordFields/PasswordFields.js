import { isEasyPassword, isMediumPassword, isStrongPassword } from '../../utils/checkPassword';
import styles from './PasswordFields.module.css';

const PasswordFields = ({ value }) => {
  const getFieldColor = (index) => {
    if (!value) return '#b3b7c3';
    if (value.length < 8) return '#c51f3b';
    if (isEasyPassword(value)) return '#3cb043';
    if (index === 1 && isStrongPassword(value)) return '#c51f3b';
    if (index < 3 && isMediumPassword(value)) return '#ffe008';
  };

  return (
    <div className={styles.fields}>
      <div className={styles.field} style={{ backgroundColor: getFieldColor(1) }}></div>
      <div className={styles.field} style={{ backgroundColor: getFieldColor(2) }}></div>
      <div className={styles.field} style={{ backgroundColor: getFieldColor(3) }}></div>
    </div>
  );
};

export default PasswordFields;
