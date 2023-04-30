import PropTypes from 'prop-types';
import cssModule from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={cssModule.statistics}>
      {title && <h2 className={cssModule.title}>{title}</h2>}
      <ul className={cssModule.stat}>
        {stats.map(el => (
          <li className={cssModule.item} key={el.id}>
            <span className={cssModule.label}>{el.label}</span>
            <span className={cssModule.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
