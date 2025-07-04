import Image404 from "../assets/images/404.png";

function page404() {
  return (
    <div className="pageConstruction">
      <p className="texte404">Page en construction...</p>
      <img className="pageTravaux" src={Image404} alt="To be continued" />
    </div>
  );
}

export default page404;
