import summercamp from './down.jpg'
function Header_img(){

    return (
        <div class="container">
            <div class="row">
                <div class="col-8 text-center">
                   <img src={summercamp} alt='Camp in Summmer' height="400px" className=''/>
                  <h1>Athlete Registration in Summer Camp</h1>
                </div>
            </div>
        </div>
    );


}

export default Header_img;