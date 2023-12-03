import Header from "../LoginsignupComponent/Header";
import Signup from "../LoginsignupComponent/Signup";
import styles from "./signup.module.scss"
import classNames from 'classnames/bind'
const cx=classNames.bind(styles)
export default function SignupPage(){
    return(
        <>
            <div className={cx('main-container')}>
            <Header
              heading="Dang ky tai khoan"
              paragraph="Ban da co tai khoan? "
              linkName="Login"
              linkUrl="/account/loginsignupform/login"
            />
            <Signup/>
            </div>
        </>
    )
}