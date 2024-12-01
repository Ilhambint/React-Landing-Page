import imgBody from '../assets/imgBody.png'
import '../style/Unlock.css'

function Unlock() {
    return (
        <div className="containerUn">
            <div className="imgUn">
                <img src={imgBody} alt=""/>
            </div>
            <div className="textUn">
                <h2>The unseen of spending three years at Pixelgrade</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo
                    ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat
                    vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit
                    amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                    sem. Donec elementum pulvinar odio.</p>

                <button type='button' className='btn'>Learn More</button>
            </div>

        </div>
    )
}

export default Unlock