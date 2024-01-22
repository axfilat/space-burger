import React from 'react';
import styles from './icon-link.module.css';

function IconLink({ isActive, icon: Icon, children, href, onClick, onMouseEnter, onMouseLeave }) {
  const linkClassName = `${styles.element} pt-4 pb-4 pr-5 pl-5`;
  const textClassName = `text text_type_main-default ml-2 ${isActive ? "text_color_primary" : "text_color_inactive"}`;

  return (
    <a href={href} className={linkClassName} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Icon type={isActive ? "primary" : "secondary"} />
      <span className={textClassName}>
        {children}
      </span>
    </a>
  );
}

export default IconLink;

