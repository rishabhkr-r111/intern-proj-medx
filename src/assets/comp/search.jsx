import MaterialIcon, {colorPalette} from 'material-icons-react';

function Search(){
    return (
        <div className="w-full mx-[29%] my-5 drop-shadow-lg">
            <div
                className=" flex items-center "> 
                <input type={'text'} 
                    placeholder ={"search your meds"}
                    className=" h-14 w-1/3 border-1 border-black rounded-[50px] text-center "></input>
                <div className="border-1 border-black border-solid bg-black text-white h-14 w-24 ml-2 rounded-[50px] text-center 
                hover:bg-emerald-100 hover:text-black
                ">
                
                <MaterialIcon icon="search" className="order-last relative top-3"/>
                </div>
                
            </div>


        </div>
    )
}

export default Search