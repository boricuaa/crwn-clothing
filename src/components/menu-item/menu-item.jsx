import './menu-item-styles.scss';
const Menuitem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
        // string interpolation javascript in react below with image url
        backgroundImage: `url(${imageUrl})`
    }} />
    <div className="content">
        <div className="title">
            <div className="subtitle">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
                <span className="subtitle">Test</span>

            </div>
        </div>
    </div>
</div>
);

export default Menuitem;