const Footer = (props) => {
    const {showModal, handleToggleModal, data} = props
  return(
    <footer>
        <div className="bgGradient"></div>
            <div className="mainFooterDiv">
                <div className="textFooterDiv">
                <h1>
                    Miker Project
                </h1>
                <h2>
                    {data?.title}
                </h2>
                </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </div>
    </footer>
  );
}

export default Footer;