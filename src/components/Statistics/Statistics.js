import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';
//import React from 'react';

// function setbodybgcolor() {
//   document.li.styles.backgroundColor = getRandomColor();
// }
function getRandomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  return '#' + hex.toString(16).substr(-6);
}

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
