const isMobile = () => {
    const mobileRegex = new RegExp(
      `Android|webOS|iPhone|iPad|BlackBerry|Phone|Mobile`
    );
    return navigator.userAgent.search(mobileRegex) >= 0;
  };

export default isMobile;