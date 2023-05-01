export function ImageGalleryItem({ item }) {
  const { webformatURL } = item;
  const { largeImageURL } = item;
  return (
    <li className="gallery-item">
      <img
        //   onClick={this.onModal}
        src={webformatURL}
        alt=""
        data-source={largeImageURL}
      />
    </li>
  );
}
