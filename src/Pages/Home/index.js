import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../../Component/Folder.module.scss';
import { images } from '../../assets';
import Header from '../../Component/Header';
import config from '../../config';
import { getCookie } from '../../warehouse';

const cx = classNames.bind(styles);

function Home() {
    const navigate = useNavigate();

    if (getCookie().isadminlogin) {
        return (
            <div className={cx('wrapper')}>
                <Header path="/" />
                <div className={cx('main-wrapper')}>
                    <img className={cx('logo')} src={images.logoAoOpacity} />
                    <div>
                        <div className={cx('block-wrapper')}>
                            <Link to={config.routes.dynamic._} className={cx('item-wrapper')}>
                                Nội dung động
                            </Link>
                            <a className={cx('item-wrapper')}>Nội dung tĩnh</a>
                            <Link to={config.routes.approve._} className={cx('item-wrapper')}>
                                Duyệt đóng góp
                            </Link>
                        </div>
                        <div className={cx('block-wrapper')}>
                            <a className={cx('item-wrapper')}>File</a>
                            <Link to={config.routes.user._} className={cx('item-wrapper')}>
                                Người dùng
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        navigate(config.routes.login);
    }
}

export default Home;
