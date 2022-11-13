import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Product( {user}) {
    const navigate = useNavigate()
    const {id} = useParams()

    const [data, setdata] = useState([])
    const [p, setp] = useState(0)

    let [count, setcount] = useState(1)

    useEffect( () => {
        ( async () => {

            let r = await fetch('https://meds-api.onrender.com/product/' + id)
            let d = await r.json()
            setdata(d)
            // console.log(d.name)
            r = await fetch('https://meds-api.onrender.com/search/' + d.name)
            d = await r.json()
            setp(d[0])
            console.log(p)

        })();

    },[])

    const buynow = () => {
        if(user){
            navigate('/user')
        }
        else {
            navigate('/signin')
        }
    }

    return (
        <>
            <div className="flex ">
                <div className="ml-5 mt-9 mr-2 border-[1px] border-gray-200 rounded-lg flex-1 blue-gray-50">
                    <div className="m-5 font-semibold text-2xl">{data.name}</div>

                    <img 
                    src={data.img}
                    className="w-64 h-auto mx-auto my-9"
                    />

                    {/* <div className="m-5 font-semibold text-lg">Crocin Pain Relief Tablet 15's</div> */}
                    <div className="mt-5 mx-5 font-bold text-md">PRODUCT DETAILS</div>
                    <div className="mx-5 my-1 font-semibold text-md">
                       <span className="text-gray-500"> Manufacturer : </span> {data.manufacturer}
                    </div>
                    <div className="mx-5 my-1 font-semibold text-md">
                       <span className="text-gray-500">Composition : </span> {data.composition}
                    </div>
                     <div className="mx-5 my-1 font-semibold text-md">
                       <span className="text-gray-500">Description : </span> {data.description}
                    </div>
                    <div className="mx-5 my-1 font-semibold text-ld">
                       <span className="text-gray-500">About  :</span>
                       <p> {data.about} </p>
                       {/* <p> {data.about} </p>
                       <p> {data.about} </p>
                       <p> {data.about} </p>
                       <p> {data.about} </p>
                       <p> {data.about} </p>
                       <p> {data.about} </p>
                       <p> {data.about} </p> */}
                      


                    </div>

                    {/* <div className="my-9 border-2 border-gray-400 inline-block mx-5">
                        <div className="mx-5 my-1 font-semibold text-md">
                            <span className="text-gray-500">Price : ₹</span> 25.55
                        </div>
                    </div> */}


                </div>

                <div className="mr-5 my-9  ">
                     <div className="mt-7 mb-2 mx-9 text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-lg
            ">  Offers  </div>

                    <img className="mx-2 w-80 " src="https://cdn.discordapp.com/attachments/1038025122369503282/1040334376254320721/1_20221111_000634_0000.png" />
                    <img className="mx-2 w-80 " src="https://cdn.discordapp.com/attachments/1038025122369503282/1040334376594051072/5_20221111_000634_0004.png" />
                    <img className="mx-2 w-80 " src="https://cdn.discordapp.com/attachments/1038025122369503282/1040334376866676816/3_20221111_000634_0002.png" />
                    <img className="mx-2 w-80 " src="https://cdn.discordapp.com/attachments/1038025122369503282/1040334377214816296/4_20221111_000634_0003.png" />
                    <img className="mx-2 w-80 " src="https://cdn.discordapp.com/attachments/1038025122369503282/1040334377520992276/2_20221111_000634_0001.png" />
                    
                </div>
                
                <div className="fixed w-full bg-blue-500 bottom-0 h-11 flex  ">
                    <div className="text-white font-semibold m-2 order-first">Crocin Pain Relief Tablet 15's  || 
                    <span className="text-white m-2 text-sm font-thin"> ^_^  Use offers to get exclusive discounts </span>
                    
                    </div>
                    <div className="text-white font-semibold m-2 text-right">Price : ₹ {p.price}   <span className="text-gray-200 text-sm font-thin">(Inclusive of all taxes)</span></div>

                    <div className="custom-number-input w-24 ml-5">                  
                    <div className="flex flex-row h-auto w-full rounded-lg relative bg-transparent m-1">
                        <button className=" bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin" onClick={() => { setcount((pev) => pev - 1 )}}>−</span>
                        </button>
                        <input type="number" className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={count}></input>
                    <button data-action="increment" className="bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span className="m-auto text-2xl font-thin" onClick={() => { setcount((pev) => pev + 1 )}}>+</span>
                    </button>
                    </div>
                    </div>

                    

                    <div className="my-2 ml-7 bg-orange-400 rounded-lg text-white font-semibold px-5  " onClick={ buynow }>Buy Now</div>
                    <div className="m-2 bg-orange-500 rounded-sm text-white font-semibold px-9">Add to cart</div>

                </div>

            </div>

            
        </>
    )
}

export default Product
