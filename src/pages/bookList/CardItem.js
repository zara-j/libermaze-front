const CardItem = ({ title, description, imgSrc }) => (
    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card" style={{ width: '250px', height: '400px' }}>
        <img
          src={imgSrc}
          className="card-img-top"
          alt="Card cap"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
export default CardItem