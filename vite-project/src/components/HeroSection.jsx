export const HeroSection = () => {
  return (
    <>
      <main className="hero-section main " class="bg">
        <div className="container">
          <div className=" banner-column ">
            <div className="banner-inner">
              <h1 className="heading-xl" style={{marginTop:"100px"}}>
                Complete Digital Development
              </h1>
              <p className="paragraph" style={{marginTop:"50px"}}>
               <span >Your future starts now!</span>
              </p>
              <p style={{marginTop:"50px"}} className="paragraph1">Websites, apps, e-commerce, digital marketing, CRM, and security in one place.</p>
            
               <div className="button1"> 
                <button className="btn btn-darken btn-inline">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button>
                <button style={{backgroundColor:"transparent", border:"2px solid #8521c2"}} className="btn btn-darken btn-inline">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button>
              </div>
            </div>
          </div>
        </div>
        
      </main>
      
    </>
  );
};
