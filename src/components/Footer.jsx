const Footer = ({ handleToggleModal, data, fetchRandomImage }) => {
    return (
      <footer>
        <div className="bgGradient"></div>
        <div className="mainFooterDiv">
          <div className="textFooterDiv">
            <h1>Miker Project</h1>
            <h2>{data?.title}</h2>
          </div>
          <div className="footerButtonDiv">
            <button onClick={fetchRandomImage}>
              <i className="fa-solid fa-shuffle"></i>
            </button>
            <button onClick={handleToggleModal}>
              <i className="fa-solid fa-circle-info"></i>
            </button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  