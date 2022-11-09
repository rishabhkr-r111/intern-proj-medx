import { Link, useNavigate} from 'react-router-dom'


function Concerns() {
    const navigate = useNavigate()

    function nav(q) {
      navigate('/search/' + q)
    }

    return(
        <>
        <div className="flex"> 
            <div className="mt-7 mb-2 mx-9 text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2
            ">  Shop by Concerns  </div>
        </div>

        <div className="w-full flex overflow-x-scroll flex-nowrap no-scrollbar">

            <div className="product-container " onClick={() => { nav('Diabetes') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284288640163930/png_20221104_232053_0000.png"
            />
            <div className="product-text">Diabetes</div>

            </div>

            <div className="product-container " onClick={() => { nav('Cardiac') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284289118318602/png_20221104_233207_0000.png"
            />
            <div className="product-text">Cardiac</div>

            </div>

            <div className="product-container " onClick={() => { nav('Gastro') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284289512591530/png_20221105_002546_0000.png"
            />
            <div className="product-text">Gastro Intestinal</div>

            </div>

            <div className="product-container " onClick={() => { nav('Liver') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284289936207883/png_20221105_073031_0000.png"
            />
            <div className="product-text">Liver</div>

            </div>

            <div className="product-container " onClick={() => { nav('Respiratory') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284290275954698/png_20221105_073903_0000.png"
            />
            <div className="product-text">Respiratory</div>

            </div>

            <div className="product-container " onClick={() => { nav('Bones and Joints') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284291047694376/png_20221105_074534_0000.png"
            />
            <div className="product-text">Bones, Joints And Muscles</div>

            </div>

            <div className="product-container " onClick={() => { nav('ENT') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284291509071972/png_20221105_081259_0000.png"
            />
            <div className="product-text">ENT</div>          

            </div>

           

            <div className="product-container " onClick={() => { nav('Eye') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284292326969414/png_20221105_082022_0000.png"
            />
            <div className="product-text">Eye</div>          
            </div>

            <div className="product-container " onClick={() => { nav('Kidney') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038137730615484427/1038284291894943824/png_20221105_081508_0000.png"
            />
            <div className="product-text">Kidney</div>          
            </div>

            

           


        </div>
        
        
        
        </>
    )

}

export default Concerns