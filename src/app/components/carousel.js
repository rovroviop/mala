import Image  from "next/image"
export default function carousel() {
    return (
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bsinterval="5000">
      <Image src="/assets/img/03.png" layout="responsive" className="d-block w-100" width={1920} height={960} alt="..." />
    </div>
    <div className="carousel-item" data-bsinterval="5000">
      <Image src="/assets/img/04.png" layout="responsive" className="d-block w-100" width={1920} height={960} alt="..." />
    </div>
    <div className="carousel-item"data-bsinterval="5000">
      <Image src="/assets/img/05.png" layout="responsive"className="d-block w-100" width={1920} height={960} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    ) 
}    