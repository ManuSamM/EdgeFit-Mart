import supplements from '../../assets/supplements.jpg'
import equipments from '../../assets/equipments.jpg'
import sportswear from '../../assets/sportswear.jpg'
import './Categories.css'

function Categories() {

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    return (
        <div className='categories'>
            <div className="container-fluid">
                <div className='d-flex justify-content-around align-items-center mb-5'>
                    <div id='supplements' className='categories-card'>
                        <img src={supplements}
                            height={360}
                            width={360}
                            onDragStart={handleDragStart}></img>
                    </div>
                    <div className='categories-subtext'>
                        <b className='categories-heading'>Supplements</b><br />
                        Revitalize your fitness journey with our premium line of<br />
                        cutting-edge fitness supplements, meticulously crafted to<br />
                        enhance your performance and elevate your well-being to<br />
                        new heights.
                    </div>
                </div>
                <div className='d-flex justify-content-around align-items-center mb-5'>
                    <div className='categories-subtext'>
                        <b className='categories-heading'>Equipments</b><br />
                        Transform your workout experience with our state-of-the-art<br />
                        gym and fitness equipment, meticulously designed to inspire<br />
                        strength, endurance, and unparalleled results on your path to<br />
                        a healthier, fitter you.
                    </div>
                    <div id='equipments' className='categories-card'>
                        <img src={equipments} height={360} width={360} onDragStart={handleDragStart}></img>
                    </div>
                </div>
                <div className='d-flex justify-content-around align-items-center mb-5'>
                    <div id='sportswear' className='categories-card'>
                        <img src={sportswear} height={360} width={360} onDragStart={handleDragStart}></img>
                    </div>
                    <div className='categories-subtext'>
                        <b className='categories-heading'>Sports Wear</b><br />
                        Elevate your athletic style and performance with our<br />
                        sportswear collection, blending cutting-edge design and<br />
                        comfort to empower you to look and feel your best, both<br />
                        on and off the field.
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Categories