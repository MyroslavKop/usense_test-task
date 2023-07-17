import styles from './Form.module.css';

const Form = ({ value, setValue }) => {
  const handleChange = ({ target: { value } }) => setValue(value);

  return (
    <form className={styles.form}>
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        type="password"
        id="password"
        className={styles.input}
        placeholder="Enter your password"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
