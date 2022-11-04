import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import onRandomColor from 'utils/onRandomColor';


const Statistics = ({title, stats}) => {
    return(
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

       <ul className={css.stat__list}>
        {stats.map(stat => (
            <li className={css.item} key={stat.id} style={onRandomColor()}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
            </li>
        ))}
    </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))

}

export default Statistics
