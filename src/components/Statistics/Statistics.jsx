import PropTypes from 'prop-types';
import { uniqArr } from '../utils/uniq-arr';
import css from './Statistics.module.css';

export const Statistics = ({ data, title }) => {
    const uniq = uniqArr(data);

    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {uniq.map(item => {
                        const { id, label, percentage } = item;

                        return (
                            <li key={id} className={css.item}>
                                <span className={css.label}>{label}</span>
                                <span className={css.percentage}>
                                    {percentage}%
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};
