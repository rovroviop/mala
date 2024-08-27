import Image  from "next/image"
import Link  from  "next/link"

export default function navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Image src="/assets/img/01.png" alt="Bootstrap"width={197} height={40} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> Home <i class="bi bi-house-door"></i> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link <i class="bi bi-link"></i></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown  <i class="bi bi-menu-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">พิการ</a>
        </li>
      </ul>
      <Link href="/signup" className="btn btn-outline-success">เข้าสู่ระบบ</Link>
      <Link href="/signin" className="btn btn-outline-success">สมัครสมชิก</Link>&nbsp;
    </div>
  </div>
</nav>

    )
}
