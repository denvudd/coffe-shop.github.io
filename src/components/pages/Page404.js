import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Page404() {
  return (
  <>
    <Helmet>
      <meta name="description"
            content={'Coffe good information'}
      />
      <title>Coffe good information</title>
    </Helmet>
    <div className="notExist">
      <div className="container">
        <div className="notExist-inner">
          <div className="section-header">
            <div className="section-title">
              <h2>This page does not exist</h2>
            </div>
          </div>
          <div className="notExist-text">
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Page404;