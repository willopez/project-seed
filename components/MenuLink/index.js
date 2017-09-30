import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'next/router';
import { NavLink } from 'reactstrap';

const MenuLink = ({ children, router, href, className }) => {
  const active = router.pathname === href ? 'active' : '';

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  const classes = classNames(className, active);

  return (
    <NavLink href={href} onClick={handleClick} className={classes}>
      {children}
    </NavLink>
  );
};

MenuLink.propTypes = {
  children: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default withRouter(MenuLink);
