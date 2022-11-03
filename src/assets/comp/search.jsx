import MaterialIcon, {colorPalette} from 'material-icons-react';

function Search(){
    return (
        <div className="w-full grid content-center">
            <div
                className="bg-white h-14 w-2/3 mx-auto text-center my-4 border-[1px] border-gray-300 rounded-[50px]

                "> 
                <input type={'text'} 
                    placeholder ={"search your meds"}
                    className="w-full h-full border-none rounded-[50px] text-center"></input>

                <MaterialIcon icon="search" />
                
            </div>
        </div>
    )
}

export default Search