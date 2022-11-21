import processing from '../../assets/icon/processing.gif'

function NotFound() {
    return (
        <div className="not-found">
            <p className="not-found__message">Sorry, page not found</p>
            <img src={processing} alt="404" className="not-found__error" />
        </div>
    )
}

export default NotFound;