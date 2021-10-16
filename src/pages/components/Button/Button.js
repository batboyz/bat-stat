import { cx } from '../../../util/classNames'
import './Button.scss';


const Button = ({ data, className, children, onClick }) => {
  return (
    <button className={cx("button-container", className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;