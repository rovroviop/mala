import Image  from "next/image"

export default function card() {
    return (
  <div className="container-fluid">
    <div className="row">

     <div className="col-md-4">
        <div className="card">
          <Image src="/assets/img/03.png" layout="responsive"  className="card-img-top" width={100} height={250} alt="..." />
          <div className="card-body">
          <h5 class="card-title">ราต่อคน199 </h5>
              <p className="card-text">ราต่อคน199 สุดคุ้ม แบบบุฟเฟต์
                ไม่จำกัดเวลา กินไม่หมดปรับน่ะจ่ะ
                
              </p>
              <a href="#" class="btn btn-primary">ดูรายละเอีดอเพิ่มเติม</a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <Image src="/assets/img/04.png" layout="responsive"  className="card-img-top" width={100} height={250} alt="..." />
          <div className="card-body">
          <h5 class="card-title">เมนูกินเล่น</h5>
              <p className="card-text">เมนูกินเล่นมีให้เลือกมากมาย ราคาตามคุณภาพอาหาร</p>
              <a href="#" class="btn btn-primary">ดูรายละเอีดอเพิ่มเติม</a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <Image src="/assets/img/05.png" layout="responsive"  className="card-img-top" width={100} height={250} alt="..." />
          <div className="card-body">
          <h5 class="card-title">เมนูเสริม</h5>
              <p className="card-text">เมนูเสริมมีให้เลือกมากมาย แล้วแต่จะเลือกเลย</p>
              <a href="#" class="btn btn-primary">ดูรายละเอีดอเพิ่มเติม</a>
          </div>
        </div>
      </div>

    </div> 
 </div>
     ) 
}    