export const facebookLinkHandler = (handle: string) => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    window.location.href = `fb://page?id=${handle}`;
  } else {
    window.open(`https://www.facebook.com/${handle}`, '_blank');
  }
};
